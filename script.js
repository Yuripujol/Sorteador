const botãoDeSortear = document.querySelector(".botão")


function sortearNúmero (){

    const númeromenor =  Math.ceil (document. querySelector (".número-menor").value)
    const númeromaior = Math.floor (document.querySelector(".número-maior").value)

  


if (númeromenor >= númeromaior){


alert("o valor minimo precisa ser menor que o valor máximo")

}

else{

   
    const resultado = Math.floor(Math.random() * ( númeromaior - númeromenor + 1)) + númeromenor;
    alert(resultado)
}


}




botãoDeSortear.addEventListener("click",sortearNúmero)










