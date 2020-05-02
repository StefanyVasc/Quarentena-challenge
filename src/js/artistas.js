const tago = document.getElementById("tago");
const reimonkey = document.getElementById("reimonkey");
const jennyh = document.getElementById("jennyh");
const ninja = document.getElementById("ninja");
const gauss = document.getElementById("gauss");
const majorir = document.getElementById("majorir");
const euli = document.getElementById("euli");

console.log(tago.classList);

function galleryByArtist() {
  const btnArtist = document.querySelectorAll(`.artistas-info`);
  const artistasGalery = document.querySelectorAll(`.artista-gallery`);

  console.log(artistasGalery);

  function btnClicked(index) {
    btnArtist.forEach((artista) => {
      artista.classList.remove("clicado");
    });
    btnArtist[index].classList.add("clicado");
  }

  btnArtist.forEach((artista, index) => {
    artista.addEventListener("click", () => {
      const btnPessoa = artista.children[1].innerText;

      btnClicked(index);
      console.log(index);
      if (index === 0) {
        tago.classList.add("ativo");
      } else {
        tago.classList.remove("ativo");
      }
      if (index === 1) {
        reimonkey.classList.add("ativo");
      } else {
        reimonkey.classList.remove("ativo");
      }
      if (index === 2) {
        jennyh.classList.add("ativo");
      } else {
        jennyh.classList.remove("ativo");
      }
      if (index === 3) {
        ninja.classList.add("ativo");
      } else {
        ninja.classList.remove("ativo");
      }
      /* if (index === 4) {
        nuts.classList.add("ativo");
      } else {
        nuts.classList.remove("ativo");
      } */
      if (index === 5) {
        gauss.classList.add("ativo");
      } else {
        gauss.classList.remove("ativo");
      }
      if (index === 6) {
        majorir.classList.add("ativo");
      } else {
        majorir.classList.remove("ativo");
      }
      if (index === 7) {
        euli.classList.add("ativo");
      } else {
        euli.classList.remove("ativo");
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

/* if() */
