

   var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
	 breakpoints: {
		600: {
		  slidesPerView: 3,
		  spaceBetween: 20,
		},
		// 768: {
		//   slidesPerView: 2,
		//   spaceBetween: 30,
		// },
		// 1024: {
		//   slidesPerView: 1,
		//   spaceBetween: 40,
		// },
	 }
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


// const swiperTop = new Swiper(".slider-top", {
// 	navigation: {
// 	  nextEl: ".swiper-button-next",
// 	  prevEl: ".swiper-button-prev",
// 	},
// 	loop: true,
//  });

 
 
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
 

 const swiperTopTop = new Swiper(".swiper-top", {
	loop: true,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	slidesPerView: 1,
 });

 $(".js-tab-trigger").click(function () {
	// клик!
 });
 $(".js-tab-trigger").click(function () {
	var id = $(this).attr("data-tab"), // 1
	  content = $('.js-tab-content[data-tab="' + id + '"]'); // 2
 });
 
 $(".js-tab-trigger").click(function () {
	var id = $(this).attr("data-tab"),
	  content = $('.js-tab-content[data-tab="' + id + '"]');
	span = $(this).attr("data-active");
	itemname = $(this).attr("data-name");
	active = $(`.bowl__subtitle[data-active=${itemname}-${span}]`);
 
	$(".js-tab-trigger.active").removeClass("active");
	$; // 1
	$(this).addClass("active"); // 2
 
	$(".js-tab-content.active").removeClass("active"); // 3
	content.addClass("active"); // 4
	active.addClass("active");
 });
 
 var jsTriggers = document.querySelectorAll(".js-tab-trigger"),
	jsContents = document.querySelectorAll(".js-tab-content");
 
 jsTriggers.forEach(function (trigger) {
	// 1
	trigger.addEventListener("click", function () {
	  // 2
	  // клик!
	});
 });
 var id = this.getAttribute("data-tab"), // 1
	content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'), // 2
	activeTrigger = document.querySelector(".js-tab-trigger.active"), // 3
	activeContent = document.querySelector(".js-tab-content.active"); // 4
 
 var jsTriggers = document.querySelectorAll(".js-tab-trigger"),
	jsContents = document.querySelectorAll(".js-tab-content");
 
 jsTriggers.forEach(function (trigger) {
	trigger.addEventListener("click", function () {
	  var id = this.getAttribute("data-tab"),
		 content = document.querySelector(
			'.js-tab-content[data-tab="' + id + '"]'
		 ),
		 activeTrigger = document.querySelector(".js-tab-trigger.active"),
		 activeContent = document.querySelector(".js-tab-content.active");
 
	  activeTrigger.classList.remove("active"); // 1
	  trigger.classList.add("active"); // 2
 
	  activeContent.classList.remove("active"); // 3
	  content.classList.add("active"); // 4
	});
 });


var video;
var display;

window.onload = function() {
	video = document.getElementById("video-item");
};

function play() {
    video.play();
}

function pause() {
    video.pause();
}

function stop() {
    video.pause();
    video.currentTime = 0;
}



function mute_and_unmute(){
	let video = document.getElemenntById('video-item')
	document.getElementById('video-item').muted = true;
}



function mute() {
	var video = document.getElementById("video-item");

	if (!video.muted) {
		 video.muted = true;
	} else {
		 // video.muted == false <- wrong use of equality operator
		 video.muted = false;
	}
}