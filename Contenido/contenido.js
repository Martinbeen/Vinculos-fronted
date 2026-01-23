// Mostrar personas por defecto
const tabla = document.getElementById("tabla");

fetch("https://vinculos-backend-fth6etbkfhfwbqhn.centralus-01.azurewebsites.net/api/Personas/listar")
  .then(response => {
    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }
    return response.json();
  })
  .then(data => {
    // limpiar todo menos los título
    tabla.innerHTML = `
      <p class="titulo">Nombre</p>
      <p class="titulo">Fecha De Nacimiento</p>
      <p class="titulo">DNI</p>
      <p class="titulo">Genero</p>
    `;
    //trola
    data.forEach(persona => {
      tabla.innerHTML += `
        <p>${persona.nombre}</p>
        <p>${persona.fechaNacimiento}</p>
        <p>${persona.dni}</p>
        <p>${persona.genero}</p>
      `;
    });
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Error de conexión con el servidor: " + error.message);
  });



const sin_registro = document.getElementById("sin_registro");
// mostrar identificaciones sin registro
const identificaciones_sin_registro = document.getElementById("identificaciones_sin_registro");


function identificacionesSinRegistro(boton, elemento){
  boton.addEventListener("click", (event) => {
    fetch("https://vinculos-backend-fth6etbkfhfwbqhn.centralus-01.azurewebsites.net/api/GestionDeIdentificacion/listar")
    .then(response => {
      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }
      return response.json();
      })
    .then(data => {
      // limpiar todo menos los títulos
      elemento.innerHTML = `
        <p class="titulo">ID</p>
        <p class="titulo">Nombres</p>
        <p class="titulo">Apellidos</p>
        <p class="titulo">Fecha De Nacimiento</p>
      `;
      // mostrar las identificaciones en filas
      data.forEach(persona => {
        elemento.innerHTML += `
          <p>${persona.id}</p>
          <p>${persona.nombres}</p>
          <p>${persona.apellidos}</p>
          <p>${persona.fechaNacimiento}</p>
        `;
      });
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Error de conexión con el servidor: " + error.message);
    });
  });
}
identificacionesSinRegistro(identificaciones_sin_registro, sin_registro);

// mostrar contactos sin registro
const contacto_sin_registro = document.getElementById("contacto_sin_registro");

function contactoSinRegistro(boton, elemento){
  boton.addEventListener("click", (event) => {
    fetch("https://vinculos-backend-fth6etbkfhfwbqhn.centralus-01.azurewebsites.net/api/GestionDeContacto/listar")
    .then(response => {
      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }
      return response.json();
      })
    .then(data => {
      // Limpiar todo menos los títulos
      elemento.innerHTML = `
        <p class="titulo">ID</p>
        <p class="titulo">Nombre</p>
        <p class="titulo">--</p>
        <p class="titulo">--</p>
      `;
      // Mostrar las identificaciones en filas
      data.forEach(persona => {
        elemento.innerHTML += `
          <p>${persona.id}</p>
          <p>${persona.nombre}</p>
          <p>--</p>
          <p>--</p>
        `;
      });
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Error de conexión con el servidor: " + error.message);
    });
  });
}
contactoSinRegistro(contacto_sin_registro, sin_registro);
/**********************************************************************/