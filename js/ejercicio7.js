function hastaNavidad()
{
    var f = new Date(2019,11,25);
    var d = new Date();
    var n = d.getDate();

    var diferencia = f.getTime()-d.getTime();
    var dias = Math.ceil(diferencia/(1000*3600*24));


    document.write(dias);



    
}

hastaNavidad();