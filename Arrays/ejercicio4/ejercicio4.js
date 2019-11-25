"use strict";

// Variable global para guardar los números recogidos
var ARRAY = [];

// Función para limpiar el formulario y el elemento donde se muestra el resultado
function limpiar()
{
    document.getElementById("num").value="";
}

function guardar(elem)
{
    var num = parseInt(elem.value);
    var resultado = document.getElementById("resultado");

    if (isNaN(num)) // Si el valo no es un entero se genera un error
    {
        resultado.style.color = "red";
        resultado.innerHTML = "Debes introducir un número entero";
    }
    else
    {
        // Si el valor es un número y no hemos llegado al final guardamos el dato
        if (num !==0)
        {
            ARRAY.push(parseInt(num));
            resultado.style.color= "blue";
            resultado.innerHTML = ARRAY;
        }
    }
}

function consumir()
{
    
}

