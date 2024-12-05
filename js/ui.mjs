// Attach button actions
export function attachActionButtons(clearBtn, saveBtn, loadBtn, fileInput, canvasActions) {
    clearBtn.addEventListener('click', () => {
        canvasActions.clearCanvas();
        console.log("Canvas cleared");
    });

    saveBtn.addEventListener('click', () => {
        canvasActions.saveCanvasAsJPEG();
    });

    loadBtn.addEventListener('click', () => {
        renderLoadModal(canvasActions.loadCanvasFromJPEG);
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            canvasActions.loadCanvasFromJPEG(file);
        }
        fileInput.value = '';
    });
}

// Render a modal for loading a file
function renderLoadModal(loadCanvasFromJPEG) {
    const modal = document.createElement('div');
    modal.id = 'load-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;

    const content = document.createElement('div');
    content.style.cssText = `
        background: white;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        width: 400px;
        max-width: 90%;
    `;

    const title = document.createElement('h2');
    title.textContent = 'Load a Drawing';
    content.appendChild(title);

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/jpeg';
    fileInput.style.marginTop = '20px';
    content.appendChild(fileInput);

    const loadButton = document.createElement('button');
    loadButton.textContent = 'Load Drawing';
    loadButton.style.cssText = `
        margin-top: 10px;
        padding: 10px 20px;
        font-size: 16px;
        background: #87ceeb;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    `;
    loadButton.addEventListener('click', () => {
        const file = fileInput.files[0];
        if (file) {
            loadCanvasFromJPEG(file);
            document.body.removeChild(modal);
        } else {
            alert("Please select a file to load!");
        }
    });

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Cancel';
    closeButton.style.cssText = `
        margin-top: 10px;
        padding: 10px 20px;
        font-size: 16px;
        background: #ff6961;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    `;
    closeButton.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    content.appendChild(loadButton);
    content.appendChild(closeButton);
    modal.appendChild(content);
    document.body.appendChild(modal);
}

// Attach tool actions (color, size, eraser)
export function attachToolActions(colorCircles, sizeCircles, eraserBtn, canvasActions) {
    colorCircles.forEach((circle) => {
        circle.addEventListener('click', () => {
            colorCircles.forEach((c) => c.classList.remove('active'));
            sizeCircles.forEach((c) => c.classList.remove('active'));
            eraserBtn.classList.remove('active');
            circle.classList.add('active');
            canvasActions.setColor(circle.getAttribute('data-color'));
            document.getElementById('drawing-canvas').style.cursor = 'default';
        });
    });

    sizeCircles.forEach((circle) => {
        circle.addEventListener('click', () => {
            colorCircles.forEach((c) => c.classList.remove('active'));
            sizeCircles.forEach((c) => c.classList.remove('active'));
            eraserBtn.classList.remove('active');
            circle.classList.add('active');
            canvasActions.setBrushSize(parseInt(circle.getAttribute('data-size'), 10));
            document.getElementById('drawing-canvas').style.cursor = 'default';
        });
    });

    eraserBtn.addEventListener('click', () => {
        colorCircles.forEach((c) => c.classList.remove('active'));
        sizeCircles.forEach((c) => c.classList.remove('active'));
        eraserBtn.classList.add('active');
        canvasActions.toggleEraser();
        document.getElementById('drawing-canvas').style.cursor = 'url("eraser-icon.png"), auto';
    });
}
