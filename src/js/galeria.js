const galeria = document.querySelector(`.galeria`);

function popularGaleria() {
  for (let imagem in imagensJSON.imagens) {
    const itemImagem = document.createElement(`div`);
    itemImagem.className = `item-galeria`;

    const img = document.createElement(`img`);
    img.src = imagensJSON.imagens[imagem].url;
    img.alt = imagensJSON.imagens[imagem].descricao;
    img.title = imagensJSON.imagens[imagem].titulo;
    galeria.appendChild(itemImagem);
    itemImagem.appendChild(img);
  }
}

popularGaleria();
