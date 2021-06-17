const API_KEY = "df674042dd5b4842beaa88b9a4896d2c";
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("query");

function exibeNoticias() {
  let divContainer = document.getElementById("container");
  let texto = "";

  // Montar texto HTML das noticias
  let dados = JSON.parse(this.responseText);
  for (i = 0; i < dados.articles.length; i++) {
    let noticia = dados.articles[i];
    let data = new Date(noticia.publishedAt);
    let queryUrl = noticia.title.replaceAll(" ", "-");
    let queryConteudo = noticia.description.replaceAll(" ", "-");
    texto =
      texto +
      `
        <div class="container">
          <div class="row g-0">
              <div class="col-md-4">
                <img style="width: 100%; max-height: 300px;" src="${
                  noticia.urlToImage
                }" alt="">
              </div>
              <div class="col-md-8">                      
                  <h5 class="titulo">${noticia.title}</h5>
                  <p class="text">${noticia.content}</p>
                  <p class="creditos"><small class="text-muted">${data.toLocaleDateString()} - 
                  ${noticia.source.name} - 
                  ${noticia.author}</small></p>
                  <a href="noticiaClickada.html?titulo=${queryUrl}&imagem=${
        noticia.urlToImage
      }&conteudo=${queryConteudo}" target="_blank" class="btn btn-primary">Leia mais+</a>                    
              </div>
          </div>
        </div>
        `;
  }

  // Preencher a DIV com o texto HTML
  divContainer.innerHTML = texto;
}

function executaPesquisa() {
  let query = document.getElementById("txtPesquisa").value;

  let xhr = new XMLHttpRequest();
  xhr.onload = exibeNoticias;
  xhr.open(
    "GET",
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&language=pt`
  );
  xhr.send();
}

function executaPesquisa2() {
  let xhr = new XMLHttpRequest();
  xhr.onload = exibeNoticias;
  xhr.open(
    "GET",
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&language=pt`
  );
  xhr.send();
}

document
  .getElementById("btnPesquisa")
  .addEventListener("click", executaPesquisa);

$(document).ready(() => {
  executaPesquisa2();
});
