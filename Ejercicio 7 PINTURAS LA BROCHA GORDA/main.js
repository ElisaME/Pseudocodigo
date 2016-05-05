//Escribe aquí tu código
var altura = prompt ("Necesitamos saber las medidas de la superficie a pintar \n¿Cuál es la altura en metros del área a pintar?")
var ancho = prompt ("¿Cuál es el ancho en metros del área a pintar?")
var precio = 30
var area=parseInt(altura)*parseInt(ancho)
var presupuesto = area *precio
alert ("La superficie mide " + area + (" m2, su presupuesto es de $")+ presupuesto)