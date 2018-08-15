/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{

    var importe;
    var importeDescuento;
    var resultado;


    importe = document.getElementById("importe").value;
    importe = parseInt(importe);

    importeDescuento = importe*0.25;

    resultado = importe - importeDescuento;

    document.getElementById("resultado").value= resultado;
	
}
