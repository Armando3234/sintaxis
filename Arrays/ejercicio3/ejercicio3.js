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
        if (num !==0 && ARRAY.length < 5)
        {
            ARRAY.push(parseInt(num));
            resultado.style.color= "blue";
            resultado.innerHTML = ARRAY;
        }
    }

    if (num === 0 || ARRAY.length === 5)
    // si hemos llegado al final se desactiva el botón y se calcula los repetidos
    {
        elem.disabled = true;
        document.getElementById("guardar").disabled = true;
        let values = repetidos();
        
        if (values.length>0) 
        {
            resultado.innerHTML = "Repetidos: " + values;
        }
        else 
        {
            resultado.innerHTML = "No hay repetidos";
        }
    }
}


// Función para calcular los repetidos
function repetidos()
{
    var numRepes = []; //Array auxiliar para ir almacenando los repetidos

    for (let i = 0, j, estaArray; i < ARRAY.length-1; i++)
    {
        //Variable que me permite salir antes del While si hay un número repetido
        estaArray = false;
        // Miraremos repetidos a partir de los que ya hemos comprobado
        j = i+1;
        
        //Si el número ya está en los repetidos no hace falta buscarlos ni guardarlos
        if (numRepes.indexOf(ARRAY[i])=== -1)
        {
            //Recorremos el array hasta que encontremos un número repetido o el final del array
            while (j < ARRAY.length && estaArray === false)
            {
                //Si encontramos un número repetido se guarda y salimos del bucle
                if (ARRAY[i] === ARRAY[j])
                {
                    estaArray = true;
                    numRepes.push(ARRAY[i]);
                }
                else
                {
                    j++;
                }
            }
        }
    }

    return (numRepes);
}