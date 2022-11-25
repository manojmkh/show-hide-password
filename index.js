let password = document.getElementById("password");
let eyeclosed = document.getElementById("eyeclosed");


eyeclosed.onclick = function () {

    if (password.type == "password") {
        password.type = "text"
        eyeclosed.src = "open eye.png"

    }
    else {
        password.type == "text"
        password.type = "password"
        eyeclosed.src = "closed eye.png"
    }
}