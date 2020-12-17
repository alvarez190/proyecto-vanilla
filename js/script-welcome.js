let cadVariables = location.search.substring(1, location.search.length);
let arrVariables = cadVariables.split("&");

for (i = 0; i < arrVariables.length; i++) {
    var arrVariableActual = arrVariables[i].split("=");
}

document.getElementById("user").innerHTML = arrVariableActual[1];

let emailUser = arrVariableActual[1];

let datenow = new Date();