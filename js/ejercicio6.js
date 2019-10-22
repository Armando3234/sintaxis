function mostrarDomingo()
{
    var anio;

    for (i=2014;i<=2050;i++)
    {
        anio=new Date (i,0,1);
        if (anio.getDay()===0)
        {
            document.write("El 1 de enero es domingo en: " + anio + "</br>");
        }
    }

}

mostrarDomingo();