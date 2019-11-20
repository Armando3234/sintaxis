"use strict";

function Person (nombre,apellido1,apellido2,dni,f_nac,sexo)
{
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.dni = dni;
    this.f_nac = f_nac;
    this.sexo = sexo;
}

Person.prototype.fullName = function ()
{
    document.write("Nombre: " + this.nombre + " Apellido1: " + this.apellido1 + " Apellido2: " + this.apellido2 + "<br>");
}

Person.prototype.toString = function()
{
    document.write("Nombre: " + this.nombre + " Apellido1: " + this.apellido1 + " Apellido2: " + this.apellido2 + ", DNI: " + this.dni + ", Fecha de Nacimiento: " + this.f_nac + ", Sexo: " + this.sexo + "<br>"); 
}

Person.prototype.getNombre = function ()
{
    return this.nombre;
}

Person.prototype.getApellido1 = function ()
{
    return this.apellido1;
}

Person.prototype.getApellido2 = function ()
{
    return this.apellido2;
}

Person.prototype.getDni = function ()
{
    return this.dni;
}

Person.prototype.getF_nac = function ()
{
    return this.f_nac;
}

Person.prototype.getSexo = function ()
{
    return this.sexo;
}

Person.prototype.setNombre = function (nombre)
{
    this.nombre = nombre;
}

Person.prototype.setApellido1 = function (apellido1)
{
    this.apellido1 = apellido1;
}

Person.prototype.setApellido2 = function (apellido2)
{
    this.apellido2 = apellido2;
}

Person.prototype.setDni = function (dni)
{
    this.dni = dni;
}

Person.prototype.setF_nac = function (f_nac)
{
    this.f_nac = f_nac;
}

Person.prototype.setSexo = function (sexo)
{
    this.sexo = sexo;
}

var persona = new Person("Marcos","Fernández","Pérez","05643289S","23/02/1987","Hombre");
persona.fullName();
persona.toString();