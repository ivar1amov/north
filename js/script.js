var swiper = new Swiper(".mySwiper", {
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });


 window.onload = function() {
  var oQuotes = document.querySelector('.slogan__inner ul.slogan__list');

  /* Функция дублирования пунктов */
  function fDoublingQuotes() {
    let nElem = oQuotes.children.length;
    for (let i = 0; i < nElem; i++) {
      oQuotes.appendChild(oQuotes.children[i].cloneNode(true));
    }
    oQuotes.style.animationDuration = '30s,' + (nElem * 2) + 's';
  }



  fDoublingQuotes();
}