const tabla = document.getElementById("tabla");
let datos;


fetch("https://vinculos-backend-fth6etbkfhfwbqhn.centralus-01.azurewebsites.net/api/Personas/listar")
  .then(response => {
    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }
    return response.json();
  })
  .then(data => {
    data.forEach(persona => {
      // Crear un bloque de <p> por cada persona
      const nombre = document.createElement("p");
      nombre.textContent = persona.Nombre;
      tabla.appendChild(nombre);

      const fecha = document.createElement("p");
      fecha.textContent = persona.FechaNacimiento;
      tabla.appendChild(fecha);

      const dni = document.createElement("p");
      dni.textContent = persona.DNI;
      tabla.appendChild(dni);

      const genero = document.createElement("p");
      genero.textContent = persona.Genero;
      tabla.appendChild(genero);
    });
    alert("se agrego");
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Error de conexión con el servidor");
  });
