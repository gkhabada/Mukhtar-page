$(document).ready(function() {
	
	$('.menu__link').click(function(event) {
		event.preventDefault();
		var link =  $(this).attr('href');
		$('html, body').animate({ scrollTop: $(link).offset().top - 70 }, 800);
	});
	
	var w = $('.portfolio__photo img').css('width');
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
