"use strict";

function Employee (name,dept)
{
    this.name = name || "";
    this.dept = dept || "general";
}

Employee.prototype.EmtoString = function ()
{
    document.write("Nombre: " + this.name + ", departamento: " + this.dept + "<br>");
}



function Manager (name, dept,reports)
{
    Employee.call(this,name,dept);
    this.reports = reports || [] ;
}

Manager.prototype = new Employee;
Manager.prototype.MtoString = function ()
{
    document.write("Nombre: " + this.name + ", departamento: " + this.dept + ", reports: " + this.reports + "<br>");
}

function WorkerBee (name,dept,projects)
{
    Employee.call(this,name,dept);
    this.projects = projects || [] ;
}

WorkerBee.prototype = new Employee;
WorkerBee.prototype.WtoString = function ()
{
    document.write("Nombre: " + this.name + ", departamento: " + this.dept + ", proyectos: " + this.projects + "<br>");
}
function SalesPerson(name,projects)
{
    WorkerBee.call(this,name,projects);
    this.quota = 100;
    this.dept = "sales";
}

SalesPerson.prototype = new WorkerBee;
SalesPerson.prototype.SPtoString = function ()
{
    document.write("Nombre: " + this.name + ", departamento: " + this.dept + ", proyectos: " + this.projects + ", cuota: " +  this.quota + "<br>");
}
function Engineer (name,projects,machine)
{
    WorkerBee.call(this,name,projects);
    this.machine = machine || "";
    this.dept = "engineering";
}

Engineer.prototype = new WorkerBee;
Engineer.prototype.EtoString = function ()
{
    document.write("Nombre: " + this.name + ", departamento: " + this.dept + ", proyectos: " + this.projects + ", machine: " + this.machine + "<br>");
}

var empleado = new Employee("felipe", "compras");
empleado.EmtoString();
var manager = new Manager("Armando","",23);
manager.MtoString();
var worker = new WorkerBee("Ernesto","","Javascript");
worker.WtoString();
var sales = new SalesPerson("Alejandro","PHP");
sales.SPtoString();
var engineer = new Engineer("Carlos","PHP y Javascript","Destornillador");
engineer.EtoString();