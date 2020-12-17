var questionUser = document.querySelectorAll('input');

function mirar() {

    let pregunta = {
        name: document.getElementById("nameQuestion").value,

    }

    for (const valor in questionUser) {
        if (questionUser.hasOwnProperty(valor)) {
            const element = questionUser[valor];
            console.log(element.value);
        }
    }
}

document.getElementById("save").onclick = mirar;