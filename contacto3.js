const listaDeContactos = [
    {
      id: 1,
      nombres: "Diego",
      apellidos: "Sanabria",
      telefono: "3185944641",
      ubicaciones: [
        {
          ciudad: "Piedecuesta",
          direccion: "Mzn 3"
        }
      ]
    },
    {
      id: 2,
      nombres: "Alejandro",
      apellidos: "Villareal",
      telefono: "3144985128",
      ubicaciones: [
        {
          ciudad: "Piedecuesta",
          direccion: "Mzn 4"
        }
      }
    }
  ];
  
  function agregarContacto(id, nombres, apellidos, telefono, ubicaciones) {
    const nuevoContacto = {
      id,
      nombres,
      apellidos,
      telefono,
      ubicaciones
    };
    listaDeContactos.push(nuevoContacto);
  }
  
  function borrarContacto(id) {
    const indice = listaDeContactos.findIndex(contacto => contacto.id === id);
    if (indice !== -1) {
      listaDeContactos.splice(indice, 1);
    }
  }
  
  function actualizarContacto(id, nuevosNombres, nuevosApellidos, nuevoTelefono, nuevasUbicaciones) {
    const contactoExistente = listaDeContactos.find(contacto => contacto.id === id);
  
    if (contactoExistente) {
      contactoExistente.nombres = nuevosNombres;
      contactoExistente.apellidos = nuevosApellidos;
      contactoExistente.telefono = nuevoTelefono;
      contactoExistente.ubicaciones = nuevasUbicaciones;
      console.log(`Contacto con ID ${id} actualizado.`);
    } else {
      console.log(`No se encontró un contacto con el ID ${id}. No se realizó ninguna actualización.`);
    }
  }
  
  function imprimirContactos() {
    listaDeContactos.forEach(contacto => {
      console.log(`ID: ${contacto.id}`);
      console.log(`Nombres: ${contacto.nombres}`);
      console.log(`Apellidos: ${contacto.apellidos}`);
      console.log(`Teléfono: ${contacto.telefono}`);
      console.log("Ubicaciones:");
      contacto.ubicaciones.forEach(ubicacion => {
        console.log(`  Ciudad: ${ubicacion.ciudad}`);
        console.log(`  Dirección: ${ubicacion.direccion}`);
      });
      console.log("-----------");
    });
  }
  
  agregarContacto(3, "Laura", "López", "555-123-4567", [
    {
      ciudad: "Ciudad 3",
      direccion: "Dirección 3"
    }
  ]);
  
  // Actualizar el contacto con ID 2
  actualizarContacto(2, "Nuevo Nombre", "Nuevo Apellido", "555-999-1234", [
    {
      ciudad: "Nueva Ciudad",
      direccion: "Nueva Dirección"
    }
  ]);
  
  // Borrar el contacto con ID 1
  borrarContacto(1);
  
  // Imprimir la lista de contactos actualizada
  imprimirContactos();
  