var x;
x=$(document);
x.ready(inicializarEventos);
x.ready(presionH1);

function inicializarEventos()
{
  var x;
  x=$("h1");
  x.click(presionH1)
}


function presionH1()
{
  var x;
  x=$(this);
  x.css("color","#fff");
}
