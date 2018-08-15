

/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente 
(entre 13 y 17 años) o niño (menor a 13 años).*/


function mostrar()
{
//tomo la 
var edad=0;

edad =document.getElementById("edad").value;

edad = parseInt(edad);

if(edad > 18)
{
alert("mayor de edad");


}else{


} if(edad >= 13 && edad <= 17)
{

    alert("es adolecente")
}
else{

}if(edad < 13)
{
    alert(" es menor ");
}








}//FIN DE LA FUNCIÓN