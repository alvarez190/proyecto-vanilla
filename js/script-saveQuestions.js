function getCookie(nombreCookie) {
    let arrayCookie = document.cookie.split(";");

    // Array donde coloco el nombre de la cookie como clave con su valor correspondiente
    let arrayValor = new Array();
    for (let dato of arrayCookie) {
        let [nombre, valor] = dato.split("=");
        arrayValor[nombre] = valor;
    }
    return arrayValor[nombreCookie];
}

function setCookie(nombre = "datos", valor, caducidad = 30) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + caducidad * 60 * 60 * 1000);
    let expiracion = "expires=" + fecha.toUTCString();

    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

// Recogo el dato enviado por el link que es el nombre.
let cadVariables = location.search.substring(1, location.search.length);
let arrVariables = cadVariables.split("&");

for (i = 0; i < arrVariables.length; i++) {
    var arrVariableActual = arrVariables[i].split("=");
}

var nameUser = arrVariableActual[1];
var usuarios = JSON.parse(getCookie("datos"));
var user;
var arrQuestion;

for (const key in usuarios) {
    if (usuarios[key].id == nameUser) {
        user = usuarios[key];
        arrQuestion = usuarios[key].questions;
    }
}

function saveQuestion(persona) {
    let pregunta = {
        name: document.getElementById("nameQuestion").value,
        answer: document.getElementById("true").checked,
        points: document.getElementById("points").value
    };

    persona.questions.push(pregunta);
    setCookie(JSON.stringify(usuarios));
}

var table = document.getElementById('register');

function listQuestion(arrayQuest) {
    for (let i = 0; i < arrayQuest.length; i++) {
        document.createElement("tr");

        for (const key in arrayQuest) {
            if (Object.hasOwnProperty.call(arrayQuest, key)) {
                const element = arrayQuest[key];

            }
        }
    }
};

document.getElementById("save").addEventListener('click', () => {
    saveQuestion(user);
});