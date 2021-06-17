const urlParams = new URLSearchParams(window.location.search);
const tituloNoticia = urlParams.get("titulo").replaceAll("-", " ");
const conteudoNoticia = urlParams.get("conteudo").replaceAll("-", " ");
const imagemNoticia = urlParams.get("imagem");

document.getElementById("conteudo").innerHTML = conteudoNoticia
document.getElementById("titulo").innerHTML = tituloNoticia
document.getElementById("image").src = imagemNoticia

console.log({
    tituloNoticia,conteudoNoticia, imagemNoticia
});
