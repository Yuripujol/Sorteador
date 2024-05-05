const botãoDeSortear = document.querySelector(".botão")


function sortearNúmero (){

    const númeromenor =  Math.ceil (document. querySelector (".número-menor").value)
    const númeromaior = Math.floor (document.querySelector(".número-maior").value)

   
    const resultado = Math.floor(Math.random() * (númeromaior - númeromenor) + númeromenor);

alert(resultado)
}




botãoDeSortear.addEventListener("click",sortearNúmero)










