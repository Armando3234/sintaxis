function fecha(dia,mes,year)
{
    var resultado = document.getElementById("resultado");
    var dia = parseInt(dia);
    var mes = parseInt(mes);
    var year = parseInt(year);

    resultado.innerHtml = new Date (year,mes,dia,0,0,0).toLocaleString();
}