"use strict";

function Persona (nombre,edad,genero)
{
    this.nombre =  nombre;
    this.edad =  edad;
    this.genero =  genero;
}

Persona.prototype.obtDetalles = function()
{
    document.write("Nombre: " + this.nombre + ", Edad: " + this.edad + ", Género: " + this.genero + "<br>");
}

function Estudiante (nombre,edad,genero,curso,grupo)
{
    Persona.call(this,nombre,edad,genero);
    this.curso = curso;
    this.grupo = grupo;
}

Estudiante.prototype.registrar = function()
{
    document.write("Nombre: " + this.nombre + ", Edad: " + this.edad + ", Género: " + this.genero + ", Curso: " + this.curso + ", Grupo: " + this.grupo + "<br>");
}

function Profesor (nombre,edad,genero,asignatura,nivel)
{
    Persona.call(this,nombre,edad,genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
}

Profesor.prototype.asignar = function()
{
    document.write("Nombre: " + this.nombre + ", Edad: " + this.edad + ", Género: " + this.genero + ", Asignatura: " + this.asignatura + ", Nivel: " + this.nivel + "<br>");
}


var person = new Persona("Armando",25,"hombre");
person.obtDetalles();

var estudiante = new Estudiante("Alejandro","20","Hombre","3º","B");
estudiante.registrar();

var profesor = new Profesor("Bonifacio","59","Hombre","Matemáticas","E.S.O.");
profesor.asignar();