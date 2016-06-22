var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("#publicidad");
  x.click(presionPublicidad)
}

function presionPublicidad()
{
  var x;
  x=$("#publicidad");
  x.css("background-color","#fff");
}

