// Carregar notícias do JSON
fetch('noticias.json')
  .then(response => response.json())
  .then(noticias => {
    noticias.forEach(noticia => {
      const div = document.getElementById(noticia.id);
      if(div){
        div.innerHTML = `<h3>${noticia.titulo}</h3><p>${noticia.conteudo}</p>`;
      }
    });
  })
  .catch(error => console.error('Erro ao carregar notícias:', error));
