var elementuser = document.getElementById('emailUser');

function validacion() {
    let email = elementuser.value;
    let expression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (expression.test(email)) {
        document.location.href = '../views/view.welcome.html?user=' + email;
    } else {
        document.getElementById("warning").style.display = 'block';
    }
}

elementuser.onfocus;
document.getElementById("enviar").onclick = validacion;