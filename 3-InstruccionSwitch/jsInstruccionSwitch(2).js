/*al seleccionar un mes informar. 
si estamos en Invierno: "Abrigate que hace frio." 
si aún no llego el Invierno: "Falta para el invierno." 
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!." 
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/
function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño) {
    
    case "Febrero":
    case "Enero":
    case "Abril":
    case "Marzo":
    case "Junio":
    alert("falta para e invierno");
    break;
    case "Julio":
    case "Agosto":
    alert("Abrigate que hace frio");
    break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    alert(" Ya paso el invierno");
    break;
    

}






 }//FIN DE LA FUNCIÓN