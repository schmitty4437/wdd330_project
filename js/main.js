// Buttons
const startNewBtn = document.getElementById('start-new');

// Screen elements
const welcomeScreen = document.getElementById('home-screen');
const canvasScreen = document.getElementById('canvas-screen');

startNewBtn.addEventListener('click', () => {
    console.log("Start New button clicked.");

    // Hide the home screen by adding 'hidden'
    welcomeScreen.classList.add('hidden');
    console.log("Home Screen Class List:", welcomeScreen.classList);

    // Show the canvas screen by removing 'hidden'
    canvasScreen.classList.remove('hidden');
    console.log("Canvas Screen Class List:", canvasScreen.classList);

    initializeCanvas(); // Initialize the canvas
});






function initializeCanvas() {
    console.log("Initializing canvas...");
    const canvas = document.getElementById('drawing-canvas');
    const ctx = canvas.getContext('2d');

    // Log canvas element and dimensions
    console.log("Canvas element:", canvas);
    console.log("Canvas dimensions (width, height):", canvas.width, canvas.height);

    // Test drawing
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(10, 10, 100, 100);
    console.log("Test rectangle drawn.");
}
