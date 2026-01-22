const tabla = document.getElementById("tabla");

fetch("https://vinculos-backend-fth6etbkfhfwbqhn.centralus-01.azurewebsites.net/api/Personas/listar")
  .then(response => {
    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }
    return response.json();
  })
  .then(data => {
    // limpiar todo menos los títulos
    /*tabla.innerHTML = `
      <p class="titulo">Nombre</p>
      <p class="titulo">Fecha De Nacimiento</p>
      <p class="titulo">DNI</p>
      <p class="titulo">Genero</p>
    `;*/

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