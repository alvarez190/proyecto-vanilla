// Recogo el dato enviado por el link que es el correo.
let cadVariables = location.search.substring(1, location.search.length);
let arrVariables = cadVariables.split("&");

for (i = 0; i < arrVariables.length; i++) {
    var arrVariableActual = arrVariables[i].split("=");
}

let emailUser = arrVariableActual[1];

// Lo imprimo por pantalla
document.getElementById("user").innerHTML = emailUser;

let nameUser;

for (let i = 0; i < emailUser.length; i++) {
    if (emailUser.charAt(i) == '@') {
        nameUser = emailUser.substring(0, i);
    }
}

let datenow = new Date();

// Variables que pertenecen a la persona
let date = datenow.getDate() + "/" + datenow.getMonth() + "/" + datenow.getDay();
let hour = datenow.getHours() + ":" + datenow.getMinutes();

/**
 * Obtenemos valor de las cookie indicada
 * @param {string} nombreCookie Nombre de la cookie que deseamos ver
 * @returns {Object} valor de la cookie
 */
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

function saveNewPerson() {
    // Si el usuario logeado no se encuentra registrado creo un registro y lo guardo en la cookie
    let persona = {
        id: nameUser,
        correo: emailUser,
        date: datenow.getDate() + "/" + datenow.getMonth() + "/" + datenow.getDay(),
        hour: datenow.getHours() + ":" + datenow.getMinutes(),
        questions: [{}]
    }

    usuarios.push(persona);
    setCookie("datos", JSON.stringify(usuarios));
}

// Obtengo el registro de usuarios y compruebo si el usuario ingresado se encuentra registrado
var usuarios = JSON.parse(getCookie("datos"));

for (const key in usuarios) {
    console.log(usuarios[key].id);
    if (usuarios[key].id == nameUser) {
        document.getElementById("lastLoginDate").innerHTML = usuarios[key].date;
        document.getElementById("lastLoginHour").innerHTML = usuarios[key].hour;
    } else {
        document.getElementById("lastLoginDate").innerHTML = date;
        document.getElementById("lastLoginHour").innerHTML = hour;
    }
}

/**
 * Envio las nuevas visitas para almacenar
 * 
 * @param {String} nombre Nombre de la cookie
 * @param {String} valor Valor que tendra el nombre de la cookie
 * @param {Number} caducidad Dias que caducira la cookie
 */
function setCookie(nombre, valor, caducidad = 30) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + caducidad * 60 * 60 * 1000);
    let expiracion = "expires=" + fecha.toUTCString();

    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

function rewritePerson(persona) {
    persona.date = date;
    persona.hour = hour;
};

document.getElementById("bttQuestion").addEventListener('click', () => {
    for (const key in usuarios) {
        if (usuarios[key].id == nameUser) {
            rewritePerson(usuarios[key]);
        } else {
            saveNewPerson();
        }
    }
    document.location.href = './view.questionsUser.html?user=' + nameUser;
}, false);