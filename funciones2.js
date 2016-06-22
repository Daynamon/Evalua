var x;
x=$(document);
x.ready(inicializarEventos);


function inicializarEventos()
{
  var x;
  x=$("h1");
  x.ready(presionH1)
}


function presionH1()
{
  var x;
  x=$("#encabezado h1");
  x.css("color","#ffffff");
}
