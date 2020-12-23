import { setCookie, getCookie, deleteCookie } from "./methods-cookie.js";

/**
 * Funcion donde redirijo la pagina si cumple la combinacion de teclas
 * @param {Event} event  Evento añadido en el elemento
 */
async function changeWindows(event) {
    let code = event.keyCode;

    if (event.ctrlKey && code == 121) {
        document.location.href = "./views/view.login.html";
    }
}

window.addEventListener("keydown", changeWindows, false);

// Temporizador donde redirige la pagina en 5s despues del haberse inicializado la pagina de inicio 
setTimeout(() => {
    document.location.href = "./views/view.login.html";
    console.log("Cambio");
}, 5000);

clearTimeout();

deleteCookie("datos");

// Datos de prueba del funcionamiente de la app guardadas en una cookie
let usuarios = [{
    id: "correoPrueba",
    correo: "correoPrueba@gmail.com",
    date: "20/12/2020",
    hour: "15:45",
    questions: [{
        name: "uno",
        answer: true,
        points: 8
    }]
}];

JSON.stringify(usuarios); // Pasa el objeto en un objeto string JSON

setCookie("datos", JSON.stringify(usuarios));