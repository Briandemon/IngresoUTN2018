function mostrar()
{
//tomo la edad  

var edad

edad = parseInt(document.getElementById("edad").value);

if (edad >17){

    alert("Es adulto")
}
else if(edad >=13 && edad <= 17 )
{

alert ("Es adolecente")
}

else
{
alert("Es menor")
}

}//FIN DE LA FUNCIÓN
