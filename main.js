var nomedosconvidados=[]
function enviar(){
    var nome=document.getElementById("nomes").value;
    nomedosconvidados.push(nome);
    document.getElementById("mostrarnomes").innerHTML=nomedosconvidados
    document.getElementById("nomes").value=" ";
}
function mostrarnomes(){
     var i=nomedosconvidados.join("<br>");
     document.getElementById("mostrarnomes2").innerHTML=i.toString();
}
function organizacao(){
    nomedosconvidados.sort();
    var i=nomedosconvidados.join("<br>");
    document.getElementById("nomesorganizados").innerHTML=i.toString();
}
function pesquisar(){
    var s= document.getElementById("pesquisar").value;
var found=0
var j;
for(j=0; j<nomedosconvidados.length; j++)
{
    if(s==nomedosconvidados[j]){
        found=found+1;
    }
    
}
document.getElementById("nomepesquisado").innerHTML="Nome encontrado"+found+" vez(es)";
console.log("Nome encontrado" +found+"vez(ses)");
}