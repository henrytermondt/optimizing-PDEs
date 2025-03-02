const loop = () => {
    calcb();
    solve();
    display();

    ctx.drawImage(glCanvas, 0, 0);
    ctx.drawImage(overlay, 0, 0);

    window.requestAnimationFrame(loop);
};

(async () => {
    await loadShaders();
    initShaders();

    window.requestAnimationFrame(loop);
})();