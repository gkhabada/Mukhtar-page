$(document).ready(function() {

/*

	$('.menu__link').click(function(event) {
		event.preventDefault();
		var link =  $(this).attr('href');
		$('html, body').animate({ scrollTop: $(link).offset().top }, 800);
	});
	
	$('.scroll-top').click(function(event) {
		$('html, body').animate({ scrollTop: 0}, 800);
	});
	
	$(document).scroll(	function () {
		var top = $("html, body").scrollTop();
		if (top > 200) {
			$('.scroll-top').fadeIn(500);
		} else {
			$('.scroll-top').fadeOut(500);
		}
	});



	
	
	

	$('.contacts_animation').focusin(function() {
		var elemHeight = $(this).css('height');
		var elemTop = parseInt(elemHeight) + 30;
		var elem = $(this).next().css({'top': -elemTop + 'px', 'color': '#23c869'});
		$(this).css({'border-color': '#23c869'});
	});
	$('.contacts_animation').focusout(function() {
		var elemHeight = $(this).css('height');
		var elemTop = parseInt(elemHeight) - 5;
		v = $(this).val();
		if (v) {
			$(this).next().css({'color': '#404040' });
			$(this).css({'color': '#27b262', 'font-family': 'mullerbold'});
		} else {
			$(this).next().css({'top': -elemTop + 'px',  'color': '#404040' });
		}
		$(this).css({'border-color': '#404040'});
	});

	
	
	
	
	$('.section').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeIn', 
		offset: 100    
	});   
	

	
	$('.works__slideshow').slick({
		arrows: false,
		speed: 8000,
		centerMode: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
		pauseOnHover: true
	});
	
	
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	
	
	
	
	*/
	
	
	
	$('.menu__link').click(function(event) {
		event.preventDefault();
		var link =  $(this).attr('href');
		$('html, body').animate({ scrollTop: $(link).offset().top - 70 }, 800);
	});
	
	
	
	
	
	
	
	var w = $('.portfolio__photo img').css('width');
	console.log(w);
	var h = parseInt(w) / 100 *67;
	$('.portfolio__photo img').css('height', h + 'px');
	$(window).resize(function(){	
		var w = $('.portfolio__photo img').css('width');
		var h = parseInt(w) / 100 *67;
		$('.portfolio__photo img').css('height', h + 'px');
	});





	
	
	
	
	
/**************** header slideshow *****************************/

	function Slider(obj) {
		this.images = document.querySelectorAll(obj.images);
		this.auto = obj.auto;	
		this.btnPrev = obj.btnPrev;
		this.btnNext = obj.btnNext;
		this.rate = obj.rate || 1000;
		var i = 0;
		var slider = this;
		this.prev = function () {
			slider.images[i].classList.remove('showed');
			i--;
			
			if (i < 0) {
				i = slider.images.length - 1;
			}

			slider.images[i].classList.add('showed');
		}
		this.next = function () {
			slider.images[i].classList.remove('showed');
			i++;

			if (i >= slider.images.length) {
				i = 0;
			}

			slider.images[i].classList.add('showed');
		}
		document.querySelector(slider.btnPrev).onclick = slider.prev;
		document.querySelector(slider.btnNext).onclick = slider.next;	
		if(slider.auto)	{
			setInterval(slider.next, slider.rate);
		}
	}
	
		
	new Slider({
		images: '.header__slide',
		btnPrev: '.slide_prew',
		btnNext: '.slide_next',
		auto: true,
		rate: 7000
	});

	
	
	
});
