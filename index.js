// Runs every frame, calculates the next time step
const loop = () => {
    calcb(); // Calculates the value of b
    solve(); // Solves for x
    display(); // Draws simulation to glCanvas

    // Draws glCanvas and the overlay to canvas so the user can see them
    ctx.drawImage(glCanvas, 0, 0);
    ctx.drawImage(overlay, 0, 0);

    window.requestAnimationFrame(loop);
};

// Loading shaders takes time and is asynchronous, so the simulation must wait to start
(async () => {
    await loadShaders();
    initShaders();

    // Begin the simulation
    window.requestAnimationFrame(loop);
})();
