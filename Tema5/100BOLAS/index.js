class Bola {
    constructor(id, cx, cy, radio, velocidadX, velocidadY, limiteX, limiteY) {
        this.id = id;
        this.cx = cx;
        this.cy = cy;
        this.radio = radio;
        this.velocidadX = velocidadX;
        this.velocidadY = velocidadY;
        this.limiteX = limiteX;
        this.limiteY = limiteY;
    }

    mover() {
        this.cx += this.velocidadX;
        this.cy += this.velocidadY;

        if (this.cx + this.radio > this.limiteX || this.cx - this.radio < 0) {
            this.velocidadX *= -1;
        }
        if (this.cy + this.radio > this.limiteY || this.cy - this.radio < 0) {
            this.velocidadY *= -1;
        }
    }
}

function colorAleatorio() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

window.onload = () => {
    const svg = document.getElementById("pantalla");
    const limiteX = 1478;
    const limiteY = 732;
    const bolas = [];

    for (let i = 0; i < 100; i++) {
        const cx = Math.random() * (limiteX - 80) + 40;
        const cy = Math.random() * (limiteY - 80) + 40;
        const radio = 20;
        const velocidadX = Math.random() * 10 - 5;
        const velocidadY = Math.random() * 10 - 5;

        const bola = new Bola(i, cx, cy, radio, velocidadX, velocidadY, limiteX, limiteY);
        bolas.push(bola);

        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("id", `bola-${i}`);
        circle.setAttribute("cx", cx);
        circle.setAttribute("cy", cy);
        circle.setAttribute("r", radio);
        circle.setAttribute("fill", colorAleatorio());

        svg.appendChild(circle);

        circle.addEventListener("click", () => {
            svg.removeChild(circle);
        });
    }

    setInterval(() => {
        bolas.forEach(bola => {
            bola.mover();

            const circle = svg.querySelector(`#bola-${bola.id}`);
            if (circle) {
                circle.setAttribute("cx", bola.cx);
                circle.setAttribute("cy", bola.cy);
            }
        });
    }, 30);
};
