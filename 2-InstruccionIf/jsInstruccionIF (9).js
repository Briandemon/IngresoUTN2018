
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

var numero;



numero= Math.floor(Math.random()*11);



if( numero <= 10)
{

	alert(numero);
}


numero = document.getElementById("FormIngreso").value;

}//FIN DE LA FUNCIÓN