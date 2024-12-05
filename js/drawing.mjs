export function initializeCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let color = "#000000"; // Default color
    let brushSize = 10; // Default brush size
    let isEraser = false; // Eraser mode toggle

    // Start drawing or erasing
    const startDrawing = (e) => {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    };

    // Draw or erase on canvas
    const draw = (e) => {
        if (!isDrawing) return;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = isEraser ? "#ffffff" : color; // Use white for eraser
        ctx.lineWidth = brushSize;
        ctx.lineCap = "round";
        ctx.stroke();
    };

    // Stop drawing or erasing
    const stopDrawing = () => {
        isDrawing = false;
        ctx.closePath();
    };

    // Clear canvas
    const clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        console.log("Canvas cleared");
    };

    // Save canvas as JPEG
    const saveCanvasAsJPEG = () => {
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');

        // Set canvas size to match the original canvas
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;

        // Fill the background with white
        tempCtx.fillStyle = "#ffffff";
        tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

        // Draw the current canvas content on top
        tempCtx.drawImage(canvas, 0, 0);

        // Convert to JPEG and download
        const dataURL = tempCanvas.toDataURL("image/jpeg", 1.0);
        let saveCount = parseInt(localStorage.getItem('saveCount')) || 0;
        saveCount += 1;
        localStorage.setItem('saveCount', saveCount);

        const fileName = `mydrawing-${saveCount}.jpeg`;
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = fileName;
        link.click();

        console.log(`Drawing saved as: ${fileName}`);
    };

    // Load a JPEG file onto the canvas
    const loadCanvasFromJPEG = (file) => {
        if (file.type !== "image/jpeg") {
            alert("Please upload a valid JPEG file.");
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                console.log("JPEG loaded onto canvas");
            };
        };
        reader.readAsDataURL(file);
    };

    // Set color, brush size, and eraser mode
    const setColor = (newColor) => {
        color = newColor;
        isEraser = false;
    };

    const setBrushSize = (newSize) => (brushSize = newSize);

    const toggleEraser = () => {
        isEraser = true;
        console.log("Eraser enabled");
    };

    return {
        startDrawing,
        draw,
        stopDrawing,
        clearCanvas,
        saveCanvasAsJPEG,
        loadCanvasFromJPEG,
        setColor,
        setBrushSize,
        toggleEraser,
    };
}

export function initializeCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let color = "#000000"; // Default color
    let brushSize = 10; // Default brush size
    let isEraser = false; // Eraser mode toggle

    // Start drawing or erasing
    const startDrawing = (e) => {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    };

    // Draw or erase on canvas
    const draw = (e) => {
        if (!isDrawing) return;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = isEraser ? "#ffffff" : color; // Use white for eraser
        ctx.lineWidth = brushSize;
        ctx.lineCap = "round";
        ctx.stroke();
    };

    // Stop drawing or erasing
    const stopDrawing = () => {
        isDrawing = false;
        ctx.closePath();
    };

    // Clear canvas
    const clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        console.log("Canvas cleared");
    };

    // Save canvas as JPEG
    const saveCanvasAsJPEG = () => {
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');

        // Set canvas size to match the original canvas
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;

        // Fill the background with white
        tempCtx.fillStyle = "#ffffff";
        tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

        // Draw the current canvas content on top
        tempCtx.drawImage(canvas, 0, 0);

        // Convert to JPEG and download
        const dataURL = tempCanvas.toDataURL("image/jpeg", 1.0);
        let saveCount = parseInt(localStorage.getItem('saveCount')) || 0;
        saveCount += 1;
        localStorage.setItem('saveCount', saveCount);

        const fileName = `mydrawing-${saveCount}.jpeg`;
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = fileName;
        link.click();

        console.log(`Drawing saved as: ${fileName}`);
    };

    // Load a JPEG file onto the canvas
    const loadCanvasFromJPEG = (file) => {
        if (file.type !== "image/jpeg") {
            alert("Please upload a valid JPEG file.");
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                console.log("JPEG loaded onto canvas");
            };
        };
        reader.readAsDataURL(file);
    };

    // Set color, brush size, and eraser mode
    const setColor = (newColor) => {
        color = newColor;
        isEraser = false;
    };

    const setBrushSize = (newSize) => (brushSize = newSize);

    const toggleEraser = () => {
        isEraser = true;
        console.log("Eraser enabled");
    };

    return {
        startDrawing,
        draw,
        stopDrawing,
        clearCanvas,
        saveCanvasAsJPEG,
        loadCanvasFromJPEG,
        setColor,
        setBrushSize,
        toggleEraser,
    };
}
