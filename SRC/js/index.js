alert ("testando site");

const botaoTrailer = document.querySelector (".botao-trailer");
const video = document.getElementById("video")
;
const modal= document.querySelector(".modal");
const linkDoVideo = video.src; 

// passo 2 - dar um jeito de identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () =>  {
    // passo 4 - abrir a modal na tela 
     modal.classList.add("aberto");
     video.setAttribute("src", linkDoVideo)
 });

 //objetivo 2- quando o usuario clicar no x devemos fechar a modal
//passo 1- -passo 1- dar um jeito de pegar o elemento que representa o botão na tela o js
const botaoFecharModal= document.querySelector(".fechar-modal"); 

//passo 2 - dar um jeito de identificar quando o usuário clicar no x
botaoFecharModal.addEventListener("click",()=>{
    //passo 3- fechar a modal
    modal.classList.remove("aberto");
    video.setAttribute("src","");
});


















