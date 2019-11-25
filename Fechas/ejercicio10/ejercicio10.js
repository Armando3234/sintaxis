function restar(dias)
{
    var resultado = document.getElementById("resultado");
    var hoy = new Date();
    var msdias = dias*(1000*60*60*24);

    var resta = hoy.getTime() - msdias;
    var finalresta = new Date (resta);
    
    resultado.innerHTML = new Date(finalresta).toLocaleString();
    
}

function sumar(dias)
{
    var resultado = document.getElementById("resultado");
    var hoy = new Date();
    var msdias = dias*(1000*60*60*24);

    var suma = hoy.getTime() + msdias;
    var finalsuma = new Date(suma);

    resultado.innerHTML = new Date(finalsuma).toLocaleString();
}