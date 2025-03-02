// Simulation constants
const n = 400,//(l / 0.05 | 0) + 1, // Edge length
    ni = (n - 2) ** 2, // Size of matricies
    no = (n - 3) * (n - 2); // Offset for lone diagonals
const dx = 0.05, // Step size 
    dt = dx ** 2 / 4; // Time step size
const rx = {r: 0, i: dt / (2 * dx ** 2)},
    ry = {r: 0, i: dt / (2 * dx ** 2)}; 
const l = n / 20;

const vArr = new Float32Array(ni);
const imgData = new ImageData(n - 2, n - 2);

const doubleSlit = x => x ** 4 - 4 * x ** 2 + 3.7;

const wallWidth = 2;
for (let i = 0; i < n; i ++) {
    if (doubleSlit(17.5 * (i - n / 2 + 1) / n) < 0) continue;
    const x = n * 3 / 5 | 0;

    for (let w = 0; w < wallWidth; w ++) {
        const index = (i * (n - 2) + (x + w)) * 4
        imgData.data[index] = 255;
        imgData.data[index + 1] = 255;
        imgData.data[index + 2] = 255;
        imgData.data[index + 3] = 255;
        vArr[i * (n - 2) + (x + w)] = 1000;
    }
}


const canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');
const overlay = document.getElementById('overlay'),
    octx = overlay.getContext('2d');

canvas.width = n - 2;
canvas.height = n - 2;
overlay.width = n - 2;
overlay.height = n - 2;

octx.putImageData(imgData, 0, 0);