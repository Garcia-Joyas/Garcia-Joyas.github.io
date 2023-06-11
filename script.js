var bu = document.getElementById("bot");
var contenedor = document.getElementById("cajaa");
var i=0;
function contar(){
  i++;
  var pp = document.createElement("p");
  pp.textContent=`${i}`;
  contenedor.appendChild(pp);

}
bu.addEventListener("click",contar);