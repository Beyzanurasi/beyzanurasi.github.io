// PEMBE MATRIX 01 YAĞMURU
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

function boyutAyarla() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

boyutAyarla();
window.addEventListener('resize', boyutAyarla);

const karakterler = "01";
const fontSize = 17;
const sütun = canvas.width / fontSize;
const damlalar = [];

for (let i = 0; i < sütun; i++) {
    damlalar[i] = Math.random() * canvas.height;
}

function çiz() {
    ctx.fillStyle = "rgba(0,0,0,0.07)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff66c4";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < damlalar.length; i++) {

        const text = karakterler.charAt(Math.floor(Math.random() * karakterler.length));
        ctx.fillText(text, i * fontSize, damlalar[i] * fontSize);

        if (damlalar[i] * fontSize > canvas.height && Math.random() > 0.975) {
            damlalar[i] = 0;
        }

        damlalar[i]++;
    }
}

setInterval(çiz, 35);
