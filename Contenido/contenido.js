const tabla = document.getElementById("tabla");

fetch("https://vinculos-backend-fth6etbkfhfwbqhn.centralus-01.azurewebsites.net/api/Personas/listar")
  .then(response => {
    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }
    return response.json();
  })
  .then(data => {
    console.log("Datos recibidos:", data);
    console.log("Total personas: " + data.length);

    if (data.length === 0) {
      alert("No se devolvieron personas desde el backend");
      return;
    }

    data.forEach(persona => {
      const nombre = document.createElement("p");
      nombre.textContent = "Nombre: " + persona.nombre;
      tabla.appendChild(nombre);

      const fecha = document.createElement("p");
      fecha.textContent = "Fecha de Nacimiento: " + persona.fechaNacimiento;
      tabla.appendChild(fecha);

      const dni = document.createElement("p");
      dni.textContent = "DNI: " + persona.dni;
      tabla.appendChild(dni);

      const genero = document.createElement("p");
      genero.textContent = "Género: " + persona.genero;
      tabla.appendChild(genero);
    });

    alert("Se agregaron las personas");
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Error de conexión con el servidor: " + error.message);
  });