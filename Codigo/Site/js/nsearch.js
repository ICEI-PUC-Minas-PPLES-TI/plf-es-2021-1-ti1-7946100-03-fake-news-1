const query = new URLSearchParams(location.search).get('query');
const container = document.getElementById('news-container');
const data = db.dados.filter(e => e.categoria.includes(query.toLocaleLowerCase()));

container.innerHTML = data.map(e => `
  <h1>${e.header}</h1>
  <h2>${e.titulo}</h2>
  <h3>${e.categoria}</h3>
  <img src="${e.imagem}" alt="${e.titulo}">
  ${e.conteudo.map(p => `<p>${p}</p>`).join('')}
`).join('<hr>') || `<h1>*ERRO* Nenhuma notícia encontrada!!!<h1>`;
