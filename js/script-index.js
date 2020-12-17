async function changeWindows(event) {
    let code = event.keyCode;

    if (event.ctrlKey && code == 121) {
        document.location.href = "./views/view.login.html";
    }
}

window.addEventListener("keydown", changeWindows, false);

setTimeout(() => {
    document.location.href = "./views/view.login.html";
    console.log("Cambio");
}, 5000);

clearTimeout();