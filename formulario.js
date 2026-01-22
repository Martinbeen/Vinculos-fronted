const user = document.getElementById("usuario");
const pass = document.getElementById("password");
const iniciar_sesion = document.getElementById("iniciar_sesion");

function ValidarUsuario(user, pass, iniciar_sesion){
    iniciar_sesion.addEventListener("click", (event) => {
        event.preventDefault(); // evitar que el form recargue la página ..
        if (user.value.length === 0 || pass.value.length === 0) return;

        const login = {NombreUsuario: user.value, Password: pass.value}

        fetch("https://vinculos-backend-fth6etbkfhfwbqhn.centralus-01.azurewebsites.net/api/SistemaUsuarios/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(login)
        })

        .then(response => response.json())
        .then(data => {
            if (data.existe){
                window.location.href = "Contenido/contenido.html";
            }
            else{
                alert("Credenciales invalidas: " + data.mensaje);
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error de conexión con el servidor");
        })
    })
}

ValidarUsuario(user, pass, iniciar_sesion);