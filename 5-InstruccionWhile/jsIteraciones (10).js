function Mostrar()
{
    var numero;
	var contador=0;
	var acumNegativo=0;
	var acumPositivo=0;
	var contNegativo=0;
	var contPositivo=0;
	var contCeros=0;
	var contPares=0; 
	var promPos;
	var promNeg;
	var diferencia;
var respuesta="si";
do{
	numero = parseInt(prompt("ingrese un numero"));


if( numero >0){
	contPositivos++;
	acumPositivo = acumPositivo 

}else if(numero < 0){
	contNegativo++;
	acumNegativo = acumNegativo + numero;
}
else {
	contCeros++;
}
if ( numero % 2 == 0){
	contPares++;
}

respuesta = prompt("Desea continuar?");


 } while(respuesta!="no")


promNeg = acumNegativo / contNegativo;




}//FIN DE LA FUNCIÓN