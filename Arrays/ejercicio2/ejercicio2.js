function calcular()
{
    var resultado = document.getElementById("resultado");
    var palabras = document.getElementById("words").value.split(",");

    //Nº de palabras
    resultado.innerHTML = "Número de palabras: " + palabras.length;
    //Primera palabra
    resultado.innerHTML = resultado.innerHTML + "<br/> La primera palabra es " + palabras[0];
    //Última palabra
    resultado.innerHTML = resultado.innerHTML + "<br/> La última palabra es " + palabras[palabras.length-1];
    resultado.innerHTML = resultado.innerHTML + "<br/>";

    //Array separando las palabras con "-"
    document.getElementById("array").innerHTML = palabras.join(" - ");
    //Array en orden inverso
    document.getElementById("reverso").innerHTML = palabras.reverse().join(" - ");
    //Array ordenado en orden alfabético
    document.getElementById("a_z").innerHTML = palabras.sort();
    //Array en orden alfabético inverso
    document.getElementById("z_a").innerHTML = palabras.reverse();

}