
$( document ).ready(function() {

    function loading() {

    }


    
    /***************************   фильт изображений и показать ещё  ***************************


     let allItems = $('.gallery__item');
     let valueLink = 'gallery__item';
     $(allItems).slice(20).css('display', 'none');

     $('.gallery__link').on('click', function(){

			console.time('link');
			$('.gallery__link').removeClass('galley_active');
			$(this).addClass('galley_active');

			valueLink = $(this).attr("value");
			allItems.hide();
			allItems.first().show();
			total = 20;
			allItems.filter( $('.' + valueLink)).slice(0, total).show();

			if($('.' + valueLink).length >= total){
				$('.show_more').show();
			}
			console.timeEnd('link');


			console.time('linkmas');
			$('.gallery__photo').masonry({
				itemSelector: '.gallery__item',
			});
			console.timeEnd('linkmas');

			return valueLink;
		});


     let total = 20,
     per = 12,
     i = 1;

     $('.show_more').on('click', function(){
			total += 12;

			console.time('show');
			let elems = $('.' + valueLink);

			elems.slice(20, total).show();
			$(this)[total >= elems.length ? 'hide' : 'show']();
			console.timeEnd('show');

			console.time('showmas');
			let elemas = elems.slice(20, total);
			$('.gallery__photo').masonry({
				itemSelector: elemas,
			});
			console.timeEnd('showmas');

			return total;

		});

     */



    /***************************   фильт изображений   ***********************************/
    let allItems = $('.gallery__item');
    let valueLink = 'gallery__item';


    $('.gallery__link').on('click', function(){

        $('.gallery__link').removeClass('galley_active');
        $(this).addClass('galley_active');

        valueLink = $(this).attr("value");
        allItems.hide();
        allItems.first().show();
        allItems.filter( $('.' + valueLink)).show();

        $('.gallery__photo').masonry({
            itemSelector: '.gallery__item'
        });
    });

    /********************   открытие или увеличение изображений  ************************/

    modal = $('.modal');
    overlay = $('.overlay');

    $('.gallery__item').click(function (event) {

        let thisImg = (event.target);
        console.log(thisImg);

        $(thisImg).clone().appendTo($(modal));
        $(modal).children().css({"top": "auto", "left": "auto", "height": "100%", "position": "relative"});
        overlay.addClass('open');
        modal.addClass('open');

    });

    $('.overlay').click(function () {
        $(modal).children().remove();
        overlay.removeClass('open');
        modal.removeClass('open');
    });

    $('.modal').click(function () {
        $(modal).children().remove();
        overlay.removeClass('open');
        modal.removeClass('open');
    });


    /*****************************   прогресс бар  ****************************************/

    $(function() {
        $(window).on("scroll resize", function() {
            var o = $(window).scrollTop() / ($(document).height() - $(window).height());
            $(".progress-bar").css({
                "width": (100 * o | 0) + "%"
            });
            $('progress')[0].value = o;
        })
    });



    $('.gallery__photo').masonry({
        itemSelector: '.gallery__item'
    });

/*********************** loading  ***************************
    function endAnim() {
        let load = document.querySelector('.load');
        load.firstElementChild.classList.add('end-anim');
        load.classList.add('end-anim');
    }
    endAnim();


 /*********************** loading with percent ***************************
    let images              = document.images,
        images_total_count  = images.length,
        images_loaded_count = 0,
        pers_display        = document.querySelector('.loading'),
        load                = document.querySelector('.load');

    for (let i = 0; i < images_total_count; i++){
        image_clone         = new Image();
        image_clone.onload  = image_loaded;
        image_clone.onerror = image_loaded;
        image_clone.src     = images[i].src;
    }
    
    function image_loaded() {
        images_loaded_count++;

        pers_display.innerHTML = (( ( 100 / images_total_count) * images_loaded_count ) << 0) + '%';

        if( images_loaded_count >= images_total_count){
            setTimeout(function () {

                load.firstElementChild.classList.add('end-anim');
                load.classList.add('end-anim');
            }, 1000);
        }

    }
     **/








});
