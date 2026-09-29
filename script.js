
const firstNumber = document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");
const operation = document.querySelector("#operacion");
const button = document.querySelector(".button");
const result = document.querySelector(".result");


button.addEventListener("click", function () {

    const number1 = Number(firstNumber.value);
    const number2 = Number(secondNumber.value);

    let total;

    if (operation.value === "sum") {

        total = number1 + number2;

    } else if (operation.value === "subtraction") {

        total = number1 - number2;

    } else if (operation.value === "multiplication") {

        total = number1 * number2;

    } else if (operation.value === "division") {

        if (number2 === 0) {

            result.textContent = "Não é possível dividir por zero";

            return;
        }

        total = number1 / number2;
    }

    result.textContent = total;
});


const slides = document.querySelectorAll(".slide");

const slidesContainer = document.querySelector(".slides");

const anterior = document.querySelector("#anterior");
const proximo = document.querySelector("#proximo");



let slideAtual = 0;



function mostrarSlide() {

    if (slideAtual === 0) {

        slidesContainer.style.transform = "translateX(0%)";

    } else if (slideAtual === 1) {

        slidesContainer.style.transform = "translateX(-50%)";
    }
}


proximo.addEventListener("click", function () {

    if (slideAtual < slides.length - 1) {

        slideAtual++;

        mostrarSlide();
    }
});


anterior.addEventListener("click", function () {

    if (slideAtual > 0) {

        slideAtual--;

        mostrarSlide();
    }
});