const galeriaParticipantes = document.querySelector(`.galeria`);

function popularGaleriaParticipantes() {
  for (let imagem in imagensJSON.imagens) {
    const itemImagem = document.createElement(`div`);
    itemImagem.className = `item-galeria`;
    itemImagem.className = `gallery`;

    const ancora = document.createElement(`a`);
    ancora.data = imagensJSON.imagens[imagem].data;
    ancora.href = imagensJSON.imagens[imagem].href;
    ancora.lightbox = imagensJSON.imagens[imagem].lightbox;
    ancora.hasAttribute("href", ancora.href);
    ancora.setAttribute("data-lightbox", ancora.lightbox);
    ancora.setAttribute("data-title", ancora.data);

    const img = document.createElement(`img`);
    img.src = imagensJSON.imagens[imagem].url;
    img.alt = imagensJSON.imagens[imagem].descricao;
    img.title = imagensJSON.imagens[imagem].titulo;
    galeriaParticipantes.appendChild(itemImagem);
    itemImagem.appendChild(ancora);
    ancora.appendChild(img);
  }
}

const btnArtist = document.querySelectorAll(`.artistas-info`);

btnArtist.forEach((artista) => {
  artista.addEventListener("click", function () {
    const artistaClicked = artista.children[1].textContent;
    console.log("clicou", artistaClicked);
    popularGaleriaParticipantes();
  });
});
