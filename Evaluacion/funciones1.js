var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("#publicidad");
  x.click(presionPublicidad)
  x=$("#h1");
  x.click(presionH1)
}

function presionPublicidad()
{
  var x;
  x=$("#publicidad");
  x.css("background-color","#fff");
}

function presionH1()
{
  var x;
  x=$("#H1");
  x.css("color","#fff");
  x.css("background-color","#030303");
  x.css("font-family","Arial");
}