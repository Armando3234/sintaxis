function buscaDomingos ()
{
    var d;
    for (let year = 2014; year<=2050;year++)
    {
        d = new Date(year,0,1);
        if (d.getDay()===0)
        {
            document.write("El 1 de energo es domingo en el año " + year + "<br>");
        }
    }

}