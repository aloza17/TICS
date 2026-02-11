document.write("Una agenda")
let opcion =parseInt (prompt("Escoge una opcion: \n 1:Agregar \n 2:Listar \n 3:Salir"));
//lo recibe en cadena gracias al prompt
let seguir= true;
let datos = [];


while(seguir) {
let opcion =parseInt (prompt("Escoge una opcion: \n 1:Agregar \n 2:Listar \n 3:Salir"));
switch(opcion) {
    case 1: 
        alert("Elegiste Agregar");
        let nombre = prompt("Ingresa tu nombre");
        datos.push(nombre);
        console.table(datos);
        break;
    case 2:
        alert("Elegiste Listar");
        break;
    case 3:
        alert("Elegiste Salir");
        seguir = false;
        break;

    default:
        alert("No elegiste una opcion valida")
        break;

}
}