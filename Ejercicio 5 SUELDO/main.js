//Escribe aquí tu código
var horas = prompt ("¿Cuántas horas al día trabaja?")
var dias = prompt ("¿Cuántos días a la semana trabaja?")
var precioxhora = prompt ("¿Cuánto le pagan por hora?")


var sueldo=(parseInt(horas)*parseInt(dias))*parseInt(precioxhora)
alert ("Su sueldo semanal es de $" + sueldo)