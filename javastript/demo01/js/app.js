
const formularioregistro = document.getElementById("formulario-registro")
const mensajeserror = document.getElementById("mensajeserror")

formularioregistro.addEventListener("submit", function (event) {
    event.preventDefault;
    const usuario = document.getElementById("usuario").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    mensajeserror.innerHTML = "";
    if (!usuario.trim()) {
        mostrarerror("el nombre de usuario es obligatorio");
        return;
    }
    if (!correo.trim()) {
        mostrarerror("el correo es obligatorio");
        return;
    }
    if (!contrasena.trim()) {
        mostrarerror("la contraseña es obligatoria");
        return;
    }

})
function mostrarerror(mensaje) {
    const mensajeerror = document.createElement("div")
    mensajeerror.className = "error";
    mensajeerror.textContent = mensaje;
    mensajeserror.appendChild(mensajeerror);
}