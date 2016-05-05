//Escribe aquí tu código
var ungalon=3.785;
var litrosvendidos= prompt ("¿Cuántos litros de leche vendió?");

var litrosengalon =(1*parseInt(litrosvendidos))/ungalon;
var precio=parseFloat(litrosengalon)*17
alert ("Usted vendió " + litrosengalon + "galones" + "\n El precio total es de $" + precio);
