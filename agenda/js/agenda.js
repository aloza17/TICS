let seguir = true;
let datos = [];

while(seguir){
    let opcion = parseInt(prompt(
        "Bienvenid@s a tu agenda \n" +
        "1. Agregar contacto \n" +
        "2. Listar contactos \n" +
        "3. Eliminar contactos \n" +
        "4. Salir"
    ));

    switch(opcion) {
        case 1:
            let nombre = prompt("Ingresa tu nombre:");
            let edad = parseInt(prompt("Ingresa tu edad:"));
            let telefono = prompt("Ingresa tu telefono:");
            let id_contacto=datos.length + 1;
            let agenda = {id_contacto, nombre, edad, telefono };
            agenda.id_contacto = id_contacto;
            agenda.nombre = nombre;
            agenda.edad = edad;
            agenda.telefono = telefono;

            datos.push(agenda); //para agregar los datos
            console.log(datos);
            alert("Tu contacto fue agregado correctamente");
            break;
        case 2:
            let todos = "";
            for(let i = 0; i < datos.length; i++){
                todos += "Nombre: " + datos[i].nombre + "\n";
                todos += "Edad: " + datos[i].edad + "\n";
                todos += "Telefono: " + datos[i].telefono + "\n";
                todos += "-----------------------\n";
            }

            if(datos.length === 0){
                alert("No hay contactos registrados");
            } else {
                alert(todos);
                console.table(datos);
            }
            break;
        case 3:
            let id_eliminar = parseInt(prompt("Ingresa el ID del contacto que deseas eliminar"));
            let index_registrado = datos.findIndex(contacto => contacto.id_contacto === id_eliminar);

            if(index_registrado !== -1){
                datos.splice(index_registrado, 1);
                alert("Contacto eliminado correctamente");
            } else {
                alert("No se encontró un contacto con ese ID");
            }    
        case 4:
            if(confirm(" Quieres cerrar sesión?")){
                seguir = false;
            }
            break;
        default:
            alert("Error");
    }
}