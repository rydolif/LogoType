document.addEventListener("DOMContentLoaded", function() {

//------------------------slider-hero-----------------------------------
	var swiper = new Swiper('.hero__slider', {
		slidesPerView: 1,
		effect: 'fade',
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.hero__pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.hero__button_next',
			prevEl: '.hero__button_prev',
		},
		scrollbar: {
			el: '.hero__scrollbar',
		},
	});

//------------------------slider-cards-----------------------------------
	var swiper = new Swiper('.cards__slider', {
		slidesPerView: 1,
		spaceBetween: 15,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.cards__nav_pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.cards__nav_next',
			prevEl: '.cards__nav_prev',
		},
		breakpoints: {
			400: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 20,
			}
		}
	});

//------------------------slider-catalog-----------------------------------
	var swiper = new Swiper('.catalog__slider', {
		slidesPerView: 1,
		// slidesPerColumn: 2,
		spaceBetween: 15,
		pagination: {
			el: '.catalog__nav_pagination',
			type: 'fraction',
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.catalog__nav_next',
			prevEl: '.catalog__nav_prev',
		},
		breakpoints: {
			400: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 20,
			}
		}
	});

//------------------------slider-reviews-----------------------------------
	var swiper = new Swiper('.reviews__slider', {
		slidesPerView: 3,
		spaceBetween: 15,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.reviews__nav_next',
			prevEl: '.reviews__nav_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			767: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
		}
	});

//------------------------slider-developments-----------------------------------
	var swiper = new Swiper('.developments__slider', {
		slidesPerView: 1,
		spaceBetween: 15,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.developments__nav_pagination',
			clickable: true,
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	});

//------------------------slider-certified-----------------------------------
	var swiper = new Swiper('.certified__slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.certified__nav_next',
			prevEl: '.certified__nav_prev',
		},
		breakpoints: {
			400: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			767: {
				slidesPerView: 3,
			},
		}
	});

//------------------------slider-video-----------------------------------
	var swiper = new Swiper('.video__slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.video__pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.video__button_next',
			prevEl: '.video__button_prev',
		},
	});

//---------------------------catalog-tabs-----------------------
	$('.tabs__wrap').hide();
	$('.tabs__wrap:first').show();
	$('.tabs ul a:first').addClass('active');
	$('.tabs ul a').click(function(event){
		event.preventDefault();
		$('.tabs ul a').removeClass('active');
		$(this).addClass('active');
		$('.tabs__wrap').hide();
		var selectTab = $(this).attr('href');
		$(selectTab).fadeIn();
	});

//-------------------------------modal---------------------------------------
	$('.modal').popup({transition: 'all 0.6s'});

//------------------------------hamburger-----------------------------
	$('.hamburger').click(function() {
	  $(this).toggleClass('hamburger--active');
	  $('.header__nav').toggleClass('header__nav--active');
	  $('.header').toggleClass('header--menu');
	  // $('body').toggleClass('no-scroll');
	});

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header--active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header--active');
      }
  });

  if($(this).scrollTop()>20){
    $('.header').addClass('header--active');
	}
//-------------------------------------------time---------------------

});
