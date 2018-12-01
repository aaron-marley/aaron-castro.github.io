'use strict'
var app = angular.module('myApp', []);

app.controller('datos', function ($scope, $http, $timeout) {

 $scope.trabajos = [
    {
      idTrabajo: 'a',
      year: '2015',
      duracion:'Marzo  del 2015- Septiembre  del 2015 .',
      empresa:"sertec.",
      puesto:"Desarrollador Web ",
      funcionUno:"Modificaciones a módulos de los sistemas web , para las nuevas necesidades de la empresa.",
      funcionDos:"Manejo de base de datos , para generar reportes de acuerdo a las necesidades de cada departamento.",
      funcionTres:"Validaciones de campos.",
      logro:"Fue conocer y  desarrollar  los conocimientos con los desarrollos de páginas web dentro una empresa.",
      tecnologia:"PHP 5,HTML 5,MYSQL, JQUERY.",
      empresaGiro:"Gestion de Cobranza.",
      empresaUbicacion:"Avenida Benjamín Franklin No. 98, Planta Baja, Cuauhtémoc, Hipódromo, 11800. ",
      empresaTel:"01-55-52-78-43-27",

    },
     {
      idTrabajo: 'b',
      year: '2015',
      duracion:'Octubre del 2015 - Noviembre del 2015.',
      empresa:"CIE/ Evento de Formula Uno",
      puesto:"Soporte Técnico Analista ",
      funcionUno:"Instalación de Equipos Computacionales",
      funcionDos:"Configuraciones de sistemas de puntos de ventas a servidores.",
      funcionTres:"Consultas de ventas en el servidor.",
      logro:"Resolver situaciones con el  sistema de punto de venta(corte de caja, tikects)",
      tecnologia:"SQL",
      empresaGiro:"Outsourcing.",
      empresaUbicacion:"Autodromo Hermanos Rodriguez",
      empresaTel:"55-40585030",

    },  
        {
      idTrabajo: 'c',
      year: '2015',
      duracion:'Noviembre del 2015 -Abril del 2016.',
      empresa:"Consorcio Laboro.",
      puesto:"Desarrollador Web.",
      funcionUno:"Modificaciones a módulos de los sistemas web , para las nuevas necesidades de la empresa.",
      funcionDos:" Se Reailizo Mailing,  crear diseños para diferentes campañas de la empresa para sus clientes .",
      funcionTres:"Se Realizo Mailing para  trabajadores y un sistema el cual consistia registrarse, se realizo  sorteo en la misma pagina web para obtener bonos productivos  o beneficios a los trabajadores de la empresa.",
      logro:"Realizar las campañas de Mailing , teniendo un gran  impacto  en los procesos de clientes y de trabajadores.",
      tecnologia:"PHP 5,HTML 5,MYSQL, JQUERY.",
      empresaGiro:"Outsourcing.",
      empresaUbicacion:"Satelite, Estado de México.",
      empresaTel:"53-93-07-00",

    }, {
      idTrabajo: 'd',
      year: '2016',
      duracion:'Junio del 2016- Septiembre del 2016',
      empresa:"Ld Suministros Industriales",
      puesto:"Desarrollador Web Jr",
      funcionUno:"Creacion  Y Desarrollo de Página Web",
      funcionDos:"Se Reailizo Mailing,  crear diseños para diferentes campañas de la empresa para sus clientes.",
      funcionTres:"Soporte Técnico a Equipos Computacionales",
      logro:"Realizar las campañas de Mailing, teniendo un gran  impacto  en los procesos de clientes ",
      tecnologia:"PHP 5,HTML 5,MYSQL, JQUERY.",
      empresaGiro:"Compra y Venta de Equipos Industrialesriales ",
      empresaUbicacion:"San Juan ixtacala,Tlalnepantla, Edo. de México  ",
      empresaTel:"55-28981134",

    }, {
      idTrabajo: 'e',
      year: '2016',
      duracion:'Octubre del 2016 - Noviembre del 2016.',
      empresa:"CIE/ Evento de Formula Uno",
      puesto:"Soporte Técnico Analista ",
      funcionUno:"Instalación de Equipos Computacionales",
      funcionDos:"Configuraciones de sistemas de puntos de ventas a servidores.",
      funcionTres:"Consultas de ventas en el servidor.",
      logro:"Resolver situaciones con el  sistema de punto de venta(corte de caja, tikects)",
      tecnologia:"SQL",
      empresaGiro:"Outsourcing.",
      empresaUbicacion:"Autodromo Hermanos Rodriguez",
      empresaTel:"55-40585030",

    },
    {
      idTrabajo: 'f',
      year: '2017',
      duracion:'Enero del 2017 - Agosto del 2017.',
      empresa:"Codeman",
      puesto:"Desarrodar Web ",
      funcionUno:"Diseñar Paginas Web Front-end",
      funcionDos:"Apoyar Realizar Web Services ",
      funcionTres:"Apoyar Consumo de datos con Json",
      logro:"Aprender a desarrollar Web Services, Empezar a Conocer Angular ",
      tecnologia:"HTML 5,JAVASCRIPT, JQUERY, Sass Css, Bootstrap,Angular 2,Ajax,Recaptcha",
      empresaGiro:" Desarrollos Web",
      empresaUbicacion:"Pedregal ",
      empresaTel:"55-40585030",

    }, 
    
    {
      idTrabajo: 'h',
      year: '2017',
      duracion:'Febrero del 2017 - Marzo del 2017.',
      empresa:"kopernet",
      puesto:"Desarrodar Web ",
      funcionUno:"Realizar un Sistema de registro de  jornada laboral para empleados ,con ubicacion de lugar.",
      funcionDos:"Realizar Un Sistema de Reporte",
      funcionTres:"",
      logro:"Terminar el proyecto en tiempo y forma  y aprender a utilizar  la api de google maps",
      tecnologia:"HTML 5,JAVASCRIPT, JQUERY, Sass Css, Bootstrap,Angular 2,Ajax",
      empresaGiro:" Desarrollos Web",
      empresaUbicacion:"Home Officce ",
      empresaTel:"55- 53172783",
    },
    {
      idTrabajo: 'i',
      year: '2017',
      duracion:'Octubre del 2017 - Noviembre del 2017',
      empresa:"CIE/ Evento de Formula Uno",
      puesto:"Soporte Técnico Analista -Clonador  ",
      funcionUno:"Clonar Equipos",
      funcionDos:"Configuraciones de sistemas de puntos de ventas a servidores.",
      funcionTres:"Consultas de ventas en el servidor.",
      logro:"Resolver situaciones con el  sistema de punto de venta(corte de caja, tikects)",
      tecnologia:"Sql",
      empresaGiro:"Outsourcing",
      empresaUbicacion:"Autodromo Hermanos Rodriguez",
      empresaTel:"55-40585030",
    },
    {
      idTrabajo: 'j',
      year: '2017',
      duracion:'Diciembre del 2017- Febrero del 2018',
      empresa:"Nadro",
      puesto:"Soporte Técnico Analista   ",
      funcionUno:"Migración de Información de Equipos de computo",
      funcionDos:"Configuraciones de Equipos de Computo ",
      funcionTres:"Sistema web , (exportar de datos de formulario en pdf y guardar en base de datos los registros ,para realizar la responsiva para las migraciones de equipos)",
      logro:"Realizar el sistema,Se llevo un registro y un control de los equipos migrados , facilitando el llenado de las responsivas",
      tecnologia:"Windows ,HTML 5,JAVASCRIPT, JQUERY, Sass Css, Bootstraps",
      empresaGiro:"Outsourcing para proyectos de Tics",
      empresaUbicacion:"Santa Fe",
      empresaTel:"55-40585030.",
    },
    {
      idTrabajo: 'k',
      year: '2018',
      duracion:' Marzo del 2018- Agosto  del 2018',
      empresa:"Parroquia San Felipe De Jesus",
      puesto:"Desarrollador Web y Soporte Tecnico ",
      funcionUno:"Sistema Web (exportar datos de formulario en pdf por medio de js ) ",
      funcionDos:"Maquetación de pagina web, Analisis y Diseño de base de datos ",
      funcionTres:"Mantenimiento de Equipo Computacionales",
      tecnologia:"Windows ,HTML 5,JAVASCRIPT,Angular, JQUERY, Sass Css, Bootstrap",
      logro:"Facilitar los Tramites  a las Secretarias",
      empresaGiro:"Religioso",
      empresaUbicacion:"Satelite,Circuito Economista ",
      empresaTel:"01-5555-623406",
    },
    {
      idTrabajo: 'l',
      year: '2018',
      duracion:"Septiembre del 2018- Noviembre del 2018",
      empresa:"Nuestro uniforme",
      puesto:"Desarrollador Web ",
      funcionUno:"Desarrollar Sistema de carrito de compras  de ",
      funcionDos:"Maquetación de pagina web, Analisis y Diseño de base de datos",
      funcionTres:"EDitar imagenes",
      logro:"Editar Imagenes,Terminar en tiempo y forma la página Web",
      tecnologia:"HTML 5,JAVASCRIPT,Angular, JQUERY, Sass Css, Bootstrap",
      empresaGiro:"Venta de playeras , uniforme y camisas bordados",
      empresaUbicacion:"Home Officce",
      empresaTel:"01-5555-623406",

    },
    {
      idTrabajo: 'm',
      year: '2018',
      duracion:'Octubre del 2018 - Noviembre del 2018.',
      empresa:"CIE/ Evento de Formula Uno",
      puesto:"Soporte Técnico Analista-Clonador ",
      funcionUno:"Instalación de Equipos Computacionales",
      funcionDos:"Consultas de ventas en el servidor.",
      funcionTres:"Desarollar sistema de registro de avances de Colocacion e instalación  De Equipos  Computacionales",
      logro:"Realizar sistema de registro, se tuvo un control de estatus  de equipos computacionales ",
      tecnologia:"HTML 5,JAVASCRIPT,Angular, JQUERY, Sass Css, Bootstrap",
      empresaGiro:"Outsourcing.",
      empresaUbicacion:"Autodromo Hermanos Rodriguez",
      empresaTel:"55-40585030",

    },
   

  ];

});

var TxtType=function(el,toRotate,period){this.toRotate=toRotate;this.el=el;this.loopNum=0;this.period=parseInt(period,10)||2000;this.txt='';this.tick();this.isDeleting=false;};TxtType.prototype.tick=function(){var i=this.loopNum%this.toRotate.length;var fullTxt=this.toRotate[i];if(this.isDeleting){this.txt=fullTxt.substring(0,this.txt.length-1);}else{this.txt=fullTxt.substring(0,this.txt.length+1);} this.el.innerHTML='<span class="wrap">'+this.txt+'</span>';var that=this;var delta=200-Math.random()*100;if(this.isDeleting){delta/=2;} if(!this.isDeleting&&this.txt===fullTxt){delta=this.period;this.isDeleting=true;}else if(this.isDeleting&&this.txt===''){this.isDeleting=false;this.loopNum++;delta=500;} setTimeout(function(){that.tick();},delta);};window.onload=function(){var elements=document.getElementsByClassName('typewrite');for(var i=0;i<elements.length;i++){var toRotate=elements[i].getAttribute('data-type');var period=elements[i].getAttribute('data-period');if(toRotate){new TxtType(elements[i],JSON.parse(toRotate),period);}} var css=document.createElement("style");css.type="text/css";css.innerHTML=".typewrite > .wrap { border-right: 0.08em solid white;color:white;font-family: 'Tangerine', cursive;font-size:35px;}";document.body.appendChild(css);};