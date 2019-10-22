function CrearTabla() {
    var tabla = document.getElementById('num').value;
    for (var i = 1; i <= 10; i++) {
        document.write(""+tabla+" X "+i+" = "+(i*tabla)+"<br>");
    }
}
