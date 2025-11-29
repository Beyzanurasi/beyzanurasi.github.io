const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katmanlar = "01";
const fontSize = 16;
const sütun = canvas.width / fontSize;

let damlalar = [];

for (let x = 0; x < sütun; x++) {
    damlalar[x] = 1;
}

function çiz() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff66c4"; /* PEMBE YAĞMUR */
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < damlalar.length; i++) {
        const text = katmanlar.charAt(Math.floor(Math.random() * katmanlar.length));
        ctx.fillText(text, i * fontSize, damlalar[i] * fontSize);

        if (damlalar[i] * fontSize > canvas.height && Math.random() > 0.975) {
            damlalar[i] = 0;
        }

        damlalar[i]++;
    }
}

setInterval(çiz, 33);

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
