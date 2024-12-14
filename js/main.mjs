import { initializeCanvas } from './drawing.mjs';
import { attachActionButtons, attachToolActions } from './ui.mjs';

// Select DOM elements
const startNewBtn = document.getElementById('start-new');
const homeScreen = document.getElementById('home-screen');
const canvasScreen = document.getElementById('canvas-screen');
const canvas = document.getElementById('drawing-canvas');
const clearBtn = document.getElementById('clear-canvas');
const saveBtn = document.getElementById('save-canvas');
const loadBtn = document.getElementById('load-canvas');
const colorCircles = document.querySelectorAll('.color-circle');
const sizeCircles = document.querySelectorAll('.size-circle');
const eraserBtn = document.getElementById('eraser-tool');

// Create a hidden file input for loading JPEG files
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = 'image/jpeg';

// Hide the file input element
fileInput.style.display = 'none';

// Append the hidden input to the body
document.body.appendChild(fileInput);

// Initialize canvas actions
const canvasActions = initializeCanvas(canvas);

// Attach canvas event listeners for drawing
canvas.addEventListener('mousedown', canvasActions.startDrawing);
canvas.addEventListener('mousemove', canvasActions.draw);
canvas.addEventListener('mouseup', canvasActions.stopDrawing);
canvas.addEventListener('mouseout', canvasActions.stopDrawing);

// Attach button actions
attachActionButtons(clearBtn, saveBtn, loadBtn, fileInput, canvasActions);

// Attach tools for color, size, and eraser
attachToolActions(colorCircles, sizeCircles, eraserBtn, canvasActions);

// Switch to Canvas Screen
startNewBtn.addEventListener('click', () => {
    homeScreen.style.display = 'none';
    canvasScreen.classList.remove('hidden');
});
