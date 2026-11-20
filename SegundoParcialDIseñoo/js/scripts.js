const capitulos = [
    "INTRODUCCIÓN",
    "ZONAS CRÍTICAS",
    "CONFLICTOS Y RUTAS",
    "HISTORIA Y PRECEDENTES",
    "JUSTICIA Y CORRUPCIÓN",
    "CONCLUSIONES"
];

let indiceActual = 0;

const slides = document.querySelectorAll(".slide");
const textoCapitulo = document.getElementById("chapter");
const textoContador = document.getElementById("counter");
const textoProgreso = document.getElementById("progress");
const botonAnterior = document.getElementById("prev");
const botonSiguiente = document.getElementById("next");

function actualizarPresentacion() {
    slides.forEach((slide, index) => {
        if (index === indiceActual) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });

    textoCapitulo.textContent = capitulos[indiceActual];
    textoContador.textContent = `${indiceActual + 1} / ${slides.length}`;
    textoProgreso.textContent = `Diapositiva ${indiceActual + 1} de ${slides.length}`;

    botonAnterior.disabled = (indiceActual === 0);
    botonSiguiente.disabled = (indiceActual === slides.length - 1);
}

botonSiguiente.addEventListener("click", function () {
    if (indiceActual < slides.length - 1) {
        indiceActual++;
        actualizarPresentacion();
    }
});

botonAnterior.addEventListener("click", function () {
    if (indiceActual > 0) {
        indiceActual--;
        actualizarPresentacion();
    }
});

actualizarPresentacion();