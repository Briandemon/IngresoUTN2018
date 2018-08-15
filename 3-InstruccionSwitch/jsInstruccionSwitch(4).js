/*al seleccionar un mes informar. 
si tiene 28 días. 
si tiene 30 días. 
si tiene 31 días.*/


function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
case "Febrero":
alert("Tiene 28 dias");
break;
case "Enero":
case "Marzo":
case "Mayo":
case "Junio":
case "Agosto":
case "Octubre":
case "Diciembre":
alert("estos meses tiene 31 dias");
break;

default:

alert("tiene 30 dias");
break;





}
	
	



}//FIN DE LA FUNCIÓN