

   var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



// var swiperTop = new Swiper(".swiper-top", {
// 	slidesPerView: 1, 
// 	centeredSlides: true,  
// 	navigation: {
// 	     nextEl: ".swiper-button-next",
// 	     prevEl: ".swiper-button-prev",
// 	   },
// 	 });
	
	
// 	 var mySwiper = new Swiper('.swiper-top', {
// 		speed: 400,
// 		spaceBetween: 100
//   });


const swiperTop = new Swiper(".slider-top", {
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	loop: true,
 });

 
 
//  const menu = document.querySelector('#menu-adaptive')
//  const open = document.querySelector('.header__content__open');
//  const close = document.querySelector('.header__content__close');
 
//  open.addEventListener('click', function (e) {
// 	 e.preventDefault();
// 	 menu.classList.add('visible');
// 	 menu.classList.remove('hidden');
//  })
 
//  close.addEventListener('click', function (e) {
// 	 e.preventDefault();
// 	 menu.classList.add('hidden');
// 	 menu.classList.remove('visible');
// 	 window.scrollTo({
// 		 top: 0
// 	 })
//  })

// $(document).ready(function() {
// 	$('.menu__button').click(function() {
// 		 $('.menu__button').toggleClass('open-menu');
// 	});
// });

function openMenu() {
	$(".header__nav").addClass("visible").removeClass("hidden");
	$("body").addClass("overflow");
 }
 
 function closeMenu() {
	$(".header__nav").removeClass("visible").addClass("hidden");
	$("body").removeClass("overflow");
 }
 
 $(".header__open").click(function () {
	openMenu();
 });
 
 $(".header__close").click(function () {
	closeMenu();
 });
 
 $(".level__btn").click(function () {
	let open = $(this).attr("data-for");
	let close = $(this).attr("data-close");
	$(`.${open}`).addClass("visivle").removeClass("hidden");
	$(`.${close}`).removeClass("visivle").addClass("hidden");
 });
 
 $(".level__btns").click(function () {
	let open = $(this).attr("data-for");
	let close1 = $(this).attr("data-close-1");
	let close2 = $(this).attr("data-close-2");
	$(`.${open}`).addClass("visivle").removeClass("hidden");
	$(`.${close1}`).removeClass("visivle").addClass("hidden");
	$(`.${close2}`).removeClass("visivle").addClass("hidden");
 });
 