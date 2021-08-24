var swiper = new Swiper(".mySwiper", {
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });


//  window.onload = function() {
//   var oQuotes = document.querySelector('.slogan__inner ul.slogan__list');

//   /* Функция дублирования пунктов */
//   function fDoublingQuotes() {
//     let nElem = oQuotes.children.length;
//     for (let i = 0; i < nElem; i++) {
//       oQuotes.appendChild(oQuotes.children[i].cloneNode(true));
//     }
//     oQuotes.style.animationDuration = '30s,' + (nElem * 2) + 's';
//   }



//   fDoublingQuotes();
// }





$(document).ready(function() {
  // Assign some jquery elements we'll need
  var $swiper = $(".MySwipperTaste");
  var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
  // into a fixed position for animation purposes
  var $bottomSlideContent = null; // Slide content that gets passed between the
  // panning slide stack and the position 'behind'
  // the stack, needed for correct animation style

  var mySwiper = new Swiper(".MySwipperTaste", {
    spaceBetween: 30,
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});
