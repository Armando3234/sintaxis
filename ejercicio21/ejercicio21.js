"use strict";

function Direccion (tCalle,nombre,numero,bloque,portal,planta,letra)
{
    this.tCalle = tCalle;
    this.nombre =  nombre;
    this.numero = numero;
    this.bloque = "" || bloque;
    this.portal = "" || portal;
    this.planta = "" || planta;
    this.letra = ""  || letra;
}


Direccion.prototype.toString = function()
{
    document.write("Tipo de Calle: " + this.tCalle + ", Nombre: " + this.nombre + ", Número: " + this.numero + ", Bloque: " + this.bloque + ", Portal: " + this.portal + ", Planta: " + this.planta + ", Letra: " + this.letra + "<br>"); 
}

Direccion.prototype.getNombre = function ()
{
    return this.nombre;
}

Direccion.prototype.gettCalle = function ()
{
    return this.tCalle;
}

Direccion.prototype.getNumero = function ()
{
    return this.numero;
}

Direccion.prototype.getBloque = function ()
{
    return this.bloque;
}

Direccion.prototype.getPortal = function ()
{
    return this.portal;
}

Direccion.prototype.getPlanta = function ()
{
    return this.planta;
}

Direccion.prototype.getLetra = function ()
{
    return this.letra;
}

Direccion.prototype.setNombre = function (nombre)
{
    this.nombre = nombre;
}

Direccion.prototype.settCalle = function (tCalle)
{
    this.tCalle = tCalle;
}

Direccion.prototype.setNumero = function (numero)
{
    this.numero = numero;
}

Direccion.prototype.setBloque = function (bloque)
{
    this.bloque = bloque;
}

Direccion.prototype.setPortal = function (portal)
{
    this.portal = portal;
}

Direccion.prototype.setPlanta = function (planta)
{
    this.planta = planta;
}

Direccion.prototype.setLetra = function (letra)
{
    this.letra = letra;
}

var direccion = new Direccion("Calle","Benedicto XVI",32,2,"derecha",8,"V");
direccion.toString();