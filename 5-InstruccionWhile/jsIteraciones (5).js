function Mostrar()
{

var sexo = prompt("ingrese f ó m ");
 while (!(sexo == "m" || sexo == "f")){
     
     sexo = prompt("Letra incorrecta. Ingrese una letra entre f ò m.")

 }
document.getElementById('Sexo').value=sexo;


}//FIN DE LA FUNCION