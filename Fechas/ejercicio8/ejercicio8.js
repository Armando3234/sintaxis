function reloj()
{
    var date = new Date();
    var hora = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    if (hora<10){
        hora = 0 + hora;
    }
    if (min<10){
        min = 0 + min;
    }
    if (sec<10){
        sec = 0 + sec;
    }
    document.getElementById("Hora").innerHTML=hora + ":" + min + ":" + sec;
}

setInterval(reloj,1000);