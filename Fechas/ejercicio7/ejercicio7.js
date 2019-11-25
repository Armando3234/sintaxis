function navidad()
{
    var d = new Date(2019,11,25);
    var hoy = new Date();

    var diferencia = d - hoy;

    var dias = Math.floor((diferencia)/(1000*60*60*24));
    document.write("Faltan " + dias + " días para Navidad este año");
    

}