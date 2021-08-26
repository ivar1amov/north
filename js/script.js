

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



var swiperTop = new Swiper(".swiper-top", {
	slidesPerView: 1, 
	centeredSlides: true,  
	navigation: {
	     nextEl: ".swiper-button-next",
	     prevEl: ".swiper-button-prev",
	   },
	 });
	
	
	 var mySwiper = new Swiper('.swiper-top', {
		speed: 400,
		spaceBetween: 100
  });

	$('.js-tab-trigger').click(function() {
		// клик! 
 })
 $('.js-tab-trigger').click(function() {
	 var id = $(this).attr('data-tab'), // 1
		  content = $('.js-tab-content[data-tab="'+ id +'"]'); // 2
 });
 
 $('.js-tab-trigger').click(function() {
	 var id = $(this).attr('data-tab'),
		  content = $('.js-tab-content[data-tab="'+ id +'"]');
	 
	 $('.js-tab-trigger.active').removeClass('active'); // 1
	 $(this).addClass('active'); // 2
	 
	 $('.js-tab-content.active').removeClass('active'); // 3
	 content.addClass('active'); // 4
 });
 
 
 var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
	  jsContents = document.querySelectorAll('.js-tab-content');
	  
	  jsTriggers.forEach(function(trigger) { // 1
	 trigger.addEventListener('click', function() { // 2
		 // клик!
	 });
 });
 var id = this.getAttribute('data-tab'), // 1
	  content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'), // 2
	  activeTrigger = document.querySelector('.js-tab-trigger.active'), // 3
	  activeContent = document.querySelector('.js-tab-content.active'); // 4
	  
	  var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
	  jsContents = document.querySelectorAll('.js-tab-content');
 
 jsTriggers.forEach(function(trigger) {
	 trigger.addEventListener('click', function() {
		 var id = this.getAttribute('data-tab'),
			  content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
			  activeTrigger = document.querySelector('.js-tab-trigger.active'),
			  activeContent = document.querySelector('.js-tab-content.active');
		 
		 activeTrigger.classList.remove('active'); // 1
		 trigger.classList.add('active'); // 2
		 
		 activeContent.classList.remove('active'); // 3
		 content.classList.add('active'); // 4
	 });
 });



 (() => {
	const menuButton = document.querySelector('.menu__button');
	const menuList = document.querySelector('.menu__list');

	menuButton.addEventListener('click', () => {
		 let expanded = menuButton.getAttribute('aria-expanded') === 'true';
		 menuButton.setAttribute('aria-expanded', !expanded);
		 menuButton.classList.toggle('menu__button--open');
		 menuList.classList.toggle('menu__list--open');
	});
})();