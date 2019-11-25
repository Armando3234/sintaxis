function addExample() {
    var str = "";
    var max = 100;
    var min = 0;
    //Bucle que genera una lista de 5 enteros separados por coma.
    for (let i=0; i<4; i++){
      str = str + Math.floor(Math.random()*(max-min+1)+min) + ", "; //Función que genera un random entre 0 y 100.
    }
    str = str + Math.floor(Math.random()*(max-min+1)+min); //No está en el bucle para no concatenar la última coma
    return str;
   }

   function mayor_menor_media() {
    //Dado un stirng con enteros separados por comas, obtengo un array utilizando la "," como separador.
   var enteros = document.getElementById ("array").value.split(",");
    var resultado1 = document.getElementById ("resultado1"); //Elemento donde se muestra el resultado
    //Variables para obtener los resultados. Se le asigna la constante Infinity.
    var mayor = -Infinity;
    var menor = Infinity;
    var suma = 0;
    var intTmp = 0; //Variable para calculos temporales.
    for (let i=0; i<enteros.length; i++){
  //for (let i of enteros) { //Bucle for of equivalente al tradicional
     //intTmp = parseInt(i);
        intTmp = parseInt(enteros[i]); //Recordad que el array es de String.
        if (intTmp < menor) menor = intTmp;
        if (intTmp > mayor) mayor = intTmp;

        suma = suma + intTmp;
    }

    resultado1.innerHTML = "Mayor: " + mayor + ";<br/>" +
                          "Menor: " + menor + ";<br/>" +
                          "Media: " + suma / enteros.length;
}