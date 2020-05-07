const btnArtist = document.querySelectorAll(`.artistas-info`);
const galeriaIndividualTago = document.querySelector(`.tago`);

function galleryByArtist() {
  const btnArtist = document.querySelectorAll(`.artistas-info`);
  const artistasGalery = document.querySelectorAll(`.artista-gallery`);

  const galeriaIndividualReimonkey = document.querySelector(`.reimonkey`);
  const galeriaIndividualJennyh = document.querySelector(`.jennyh`);
  const galeriaIndividualGauss = document.querySelector(`.gauss`);
  const galeriaIndividualEuli = document.querySelector(`.euli`);
  const galeriaIndividualMajorir = document.querySelector(`.majorir`);
  const galeriaIndividualNuts = document.querySelector(`.nuts`);
  const galeriaIndividualNinja = document.querySelector(`.ninja`);

  const euli = artesJSON.artistas[0].EuliDraws;
  const gauss = artesJSON.artistas[1].gauss2;
  const jennyh = artesJSON.artistas[2].JennyhTwT;
  const majorir = artesJSON.artistas[3].Majorir;
  const ninja = artesJSON.artistas[4].ninja029;
  const nuts = artesJSON.artistas[5].nuts_arts;
  const reimonkey = artesJSON.artistas[6].reimonkey;
  const tago = artesJSON.artistas[7].T4G0;

  function btnClicked(index) {
    btnArtist.forEach((artista) => {
      artista.classList.remove("clicado");
    });
    btnArtist[index].classList.add("clicado");
  }

  btnArtist.forEach((artista, index) => {
    artista.addEventListener("click", () => {
      const btnPessoa = artista.children[1].innerText;

      if (index === 0) {
        tago.forEach((arte, index) => {
          const itemImagem = document.createElement(`div`);
          itemImagem.className = `item-galeria`;
          itemImagem.className = `gallery`;
          itemImagem.classList.add("ativo");
          galeriaIndividualTago.classList.add("ativo");
          itemImagem.setAttribute("id", "tago");

          const ancora = document.createElement(`a`);
          ancora.data = arte.descricao;
          ancora.href = arte.href;
          ancora.lightbox = arte.lightbox;
          ancora.hasAttribute("href", ancora.href);
          ancora.setAttribute("data-lightbox", ancora.lightbox);
          ancora.setAttribute("data-title", ancora.data);

          const img = document.createElement(`img`);
          img.src = arte.url;
          img.alt = arte.descricao;
          img.title = arte.titulo;
          galeriaIndividualTago.appendChild(itemImagem);
          itemImagem.appendChild(ancora);
          ancora.appendChild(img);
        });
      } else {
        galeriaIndividualTago.classList.remove("ativo");
      }
      if (index === 1) {
        reimonkey.forEach((arte, index) => {
          const itemImagem = document.createElement(`div`);
          itemImagem.className = `item-galeria`;
          itemImagem.className = `gallery`;
          itemImagem.classList.add("ativo");
          galeriaIndividualReimonkey.classList.add("ativo");
          itemImagem.setAttribute("id", "reimonkey");

          const ancora = document.createElement(`a`);
          ancora.data = arte.descricao;
          ancora.href = arte.href;
          ancora.lightbox = arte.lightbox;
          ancora.hasAttribute("href", ancora.href);
          ancora.setAttribute("data-lightbox", ancora.lightbox);
          ancora.setAttribute("data-title", ancora.data);

          const img = document.createElement(`img`);
          img.src = arte.url;
          img.alt = arte.descricao;
          img.title = arte.titulo;
          galeriaIndividualReimonkey.appendChild(itemImagem);
          itemImagem.appendChild(ancora);
          ancora.appendChild(img);
        });
      } else {
        galeriaIndividualReimonkey.classList.remove("ativo");
      }
      if (index === 2) {
        jennyh.forEach((arte, index) => {
          const itemImagem = document.createElement(`div`);
          itemImagem.className = `item-galeria`;
          itemImagem.className = `gallery`;
          itemImagem.classList.add("ativo");
          galeriaIndividualJennyh.classList.add("ativo");
          itemImagem.setAttribute("id", "jennyh");

          const ancora = document.createElement(`a`);
          ancora.data = arte.descricao;
          ancora.href = arte.href;
          ancora.lightbox = arte.lightbox;
          ancora.hasAttribute("href", ancora.href);
          ancora.setAttribute("data-lightbox", ancora.lightbox);
          ancora.setAttribute("data-title", ancora.data);

          const img = document.createElement(`img`);
          img.src = arte.url;
          img.alt = arte.descricao;
          img.title = arte.titulo;
          galeriaIndividualJennyh.appendChild(itemImagem);
          itemImagem.appendChild(ancora);
          ancora.appendChild(img);
        });
      } else {
        galeriaIndividualJennyh.classList.remove("ativo");
      }

      if (index === 3) {
        ninja.forEach((arte, index) => {
          const itemImagem = document.createElement(`div`);
          itemImagem.className = `item-galeria`;
          itemImagem.className = `gallery`;
          itemImagem.classList.add("ativo");
          galeriaIndividualNinja.classList.add("ativo");
          itemImagem.setAttribute("id", "ninja");

          const ancora = document.createElement(`a`);
          ancora.data = arte.descricao;
          ancora.href = arte.href;
          ancora.lightbox = arte.lightbox;
          ancora.hasAttribute("href", ancora.href);
          ancora.setAttribute("data-lightbox", ancora.lightbox);
          ancora.setAttribute("data-title", ancora.data);

          const img = document.createElement(`img`);
          img.src = arte.url;
          img.alt = arte.descricao;
          img.title = arte.titulo;
          galeriaIndividualNinja.appendChild(itemImagem);
          itemImagem.appendChild(ancora);
          ancora.appendChild(img);
        });
      } else {
        galeriaIndividualNinja.classList.remove("ativo");
      }
      if (index === 4) {
        nuts.forEach((arte, index) => {
          const itemImagem = document.createElement(`div`);
          itemImagem.className = `item-galeria`;
          itemImagem.className = `gallery`;
          itemImagem.classList.add("ativo");
          galeriaIndividualNuts.classList.add("ativo");
          itemImagem.setAttribute("id", "nuts");

          const ancora = document.createElement(`a`);
          ancora.data = arte.descricao;
          ancora.href = arte.href;
          ancora.lightbox = arte.lightbox;
          ancora.hasAttribute("href", ancora.href);
          ancora.setAttribute("data-lightbox", ancora.lightbox);
          ancora.setAttribute("data-title", ancora.data);

          const img = document.createElement(`img`);
          img.src = arte.url;
          img.alt = arte.descricao;
          img.title = arte.titulo;
          galeriaIndividualNuts.appendChild(itemImagem);
          itemImagem.appendChild(ancora);
          ancora.appendChild(img);
        });
      } else {
        galeriaIndividualNuts.classList.remove("ativo");
      }
      if (index === 5) {
        gauss.forEach((arte, index) => {
          const itemImagem = document.createElement(`div`);
          itemImagem.className = `item-galeria`;
          itemImagem.className = `gallery`;
          itemImagem.classList.add("ativo");
          galeriaIndividualGauss.classList.add("ativo");
          itemImagem.setAttribute("id", "gauss");

          const ancora = document.createElement(`a`);
          ancora.data = arte.descricao;
          ancora.href = arte.href;
          ancora.lightbox = arte.lightbox;
          ancora.hasAttribute("href", ancora.href);
          ancora.setAttribute("data-lightbox", ancora.lightbox);
          ancora.setAttribute("data-title", ancora.data);

          const img = document.createElement(`img`);
          img.src = arte.url;
          img.alt = arte.descricao;
          img.title = arte.titulo;
          galeriaIndividualGauss.appendChild(itemImagem);
          itemImagem.appendChild(ancora);
          ancora.appendChild(img);
        });
      } else {
        galeriaIndividualGauss.classList.remove("ativo");
      }
      if (index === 6) {
        majorir.forEach((arte, index) => {
          const itemImagem = document.createElement(`div`);
          itemImagem.className = `item-galeria`;
          itemImagem.className = `gallery`;
          itemImagem.classList.add("ativo");
          galeriaIndividualMajorir.classList.add("ativo");
          itemImagem.setAttribute("id", "majorir");

          const ancora = document.createElement(`a`);
          ancora.data = arte.descricao;
          ancora.href = arte.href;
          ancora.lightbox = arte.lightbox;
          ancora.hasAttribute("href", ancora.href);
          ancora.setAttribute("data-lightbox", ancora.lightbox);
          ancora.setAttribute("data-title", ancora.data);

          const img = document.createElement(`img`);
          img.src = arte.url;
          img.alt = arte.descricao;
          img.title = arte.titulo;
          galeriaIndividualMajorir.appendChild(itemImagem);
          itemImagem.appendChild(ancora);
          ancora.appendChild(img);
        });
      } else {
        galeriaIndividualMajorir.classList.remove("ativo");
      }
      if (index === 7) {
        euli.forEach((arte, index) => {
          const itemImagem = document.createElement(`div`);
          itemImagem.className = `item-galeria`;
          itemImagem.className = `gallery`;
          itemImagem.classList.add("ativo");
          galeriaIndividualEuli.classList.add("ativo");
          itemImagem.setAttribute("id", "euli");

          const ancora = document.createElement(`a`);
          ancora.data = arte.descricao;
          ancora.href = arte.href;
          ancora.lightbox = arte.lightbox;
          ancora.hasAttribute("href", ancora.href);
          ancora.setAttribute("data-lightbox", ancora.lightbox);
          ancora.setAttribute("data-title", ancora.data);

          const img = document.createElement(`img`);
          img.src = arte.url;
          img.alt = arte.descricao;
          img.title = arte.titulo;
          galeriaIndividualEuli.appendChild(itemImagem);
          itemImagem.appendChild(ancora);
          ancora.appendChild(img);
        });
      } else {
        galeriaIndividualEuli.classList.remove("ativo");
      }
    });
  });
}

galleryByArtist();

function MenuMobileLink() {
  const mobile = document.querySelector("#mobile");
  const header = document.querySelector("header");
  const introArtistas = document.querySelector(".artistas");

  mobile.addEventListener("click", () => {
    if (header.classList.contains("active")) {
      introArtistas.classList.add("link-mobile");
    } else {
      introArtistas.classList.remove("link-mobile");
    }
  });
}
MenuMobileLink();
