// header burger =========================
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

// lenguage drop menu ======================
$(document).ready(function () {
	$('.lang_current').click(function () {
		$('.lang_list').toggle()
	});

	$(document).mouseup(function (e) {
		if ($(e.target).closest(".lang_list").length === 0) {
			$(".lang_list").hide();
		}
	});
});

// POPUP ===========================================
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();

// ========Grafik================================================================

// const ctx = document.getElementById('myChart');

// new Chart(ctx, {
// 	type: 'bar',
// 	data: {
// 		labels: ['2018', '2019', '2020', '2021', '2022'],
// 		datasets: [{
// 			label: 'Количество предприятий отрасли',
// 			data: [count__oked_ul18, count__oked_ul19, count__oked_ul20, count__oked_ul21, count__oked_ul22],
// 			borderWidth: 1
// 		}]
// 	},
// 	options: {
// 		plugins: {
// 			legend: {
// 			  display: false
// 			},
// 			title: {
//                 display: true,
//                 text: 'Количество предприятий отрасли'
//             }
// 		},
// 		scales: {
// 			y: {
// 				beginAtZero: true
// 			}
// 		}
// 	}
// });

// =============================================================================
// const ctx2 = document.getElementById('myChart2');

// new Chart(ctx2, {
// 	type: 'bar',
// 	data: {
// 		labels: ['2018', '2019', '2020', '2021', '2022'],
// 		datasets: [{
// 			label: 'Количество индивидуальных предпринимателей',
// 			data: [count__oked_ip18, count__oked_ip19, count__oked_ip20, count__oked_ip21, count__oked_ip22],
// 			borderWidth: 1,
// 			borderColor: 'rgb(114, 219, 71)',
// 			backgroundColor: 'rgba(114, 219, 71, 0.5)'
// 		}]
// 	},
// 	options: {
// 		plugins: {
// 			legend: {
// 			  display: false
// 			},
// 			title: {
//                 display: true,
//                 text: 'Количество индивидуальных предпринимателей'
//             }
// 		},
// 		scales: {
// 			y: {
// 				beginAtZero: true
// 			}
// 		}
// 	}
// });
// open extended info ======================================
$(document).ready(function () {
	$('.content__more-info-btn').click(function (event) {
		$('.content__extanded-wrapper').show('open');
		$('.content__more-info').hide('dn');
		event.preventDefault();
	});
});
// close extended info ======================================
$(document).ready(function () {
	$('.info-extended__close-btn').click(function (eventClose) {
		$('.content__extanded-wrapper').hide('open');
		$('.content__more-info').show('dn');
		eventClose.preventDefault();
	});
});
//========TAB================================================================================================================================================
const tabBtn = document.querySelectorAll(".tab__btn");
const tabContents = document.querySelectorAll(".tab__item");

tabBtn.forEach(function (element) {
	element.addEventListener("click", openTabs);
});

function openTabs(evt) {
	const btnTarget = evt.currentTarget;
	const item = btnTarget.dataset.item;
	var item_0 = btnTarget.dataset.item+'0';
	tabContents.forEach(function (item) {
		item.classList.remove("tab__item--active");
	});

	tabBtn.forEach(function (item) {
		item.classList.remove("tab__btn--active");
	});

	document.querySelector(`#${item}`).classList.add("tab__item--active");
	document.querySelector(`#${item_0}`).classList.add("tab__item--active");

	btnTarget.classList.add("tab__btn--active");
}


$('.popup__button').on('click', function(e){
    e.preventDefault();
    var name = $('input[name="popup__name"]').val();
    var phone = $('input[name="popup__phone"]').val();
	var link = $('input[name="link"]').val();
    if($('input[name="popup__name"]').val()){
      name = $('input[name="popup__name"]').val();
    }else{
		name = '-';
    }
    if($('input[name="popup__phone"]').val()){
		phone =$('input[name="popup__phone"]').val();
    }else{
		phone = '-';
    }
    $.ajax({
        type: "POST",
        url: "class/send.php",
        data: { "name": name, "phone": phone, "bin" : window.location.href.replace('https://results.niac.kz/',''), link: window.location.href},
        success: function(data) {
          $('.popup__form')[0].reset();
          popupClose();
        }
    });
  });
  $('.not-included__button').on('click', function(e){
    e.preventDefault();
    var name = $('input[name="not-included__name"]').val();
    var phone = $('input[name="not-included__phone"]').val();
	var link = $('input[name="link"]').val();
    if($('input[name="not-included__name"]').val()){
      name = $('input[name="not-included__name"]').val();
    }else{
		name = '-';
    }
    if($('input[name="not-included__phone"]').val()){
		phone =$('input[name="not-included__phone"]').val();
    }else{
		phone = '-';
    }
    $.ajax({
        type: "POST",
        url: "class/send.php",
        data: { "name": name, "phone": phone, "bin" : window.location.href.replace('https://results.niac.kz/',''), link: window.location.href},
        success: function(data) {
          $('.not-included__form')[0].reset();
        }
    });
  });

$(document).ready(function($){
var copy_url = document.location.href;
new Clipboard('.copy_link', {text: function(){ return copy_url;}});
});
$(document).ready(function() {
    $('.fb-share').click(function(e) {
        e.preventDefault();
        window.open($(this).attr('href'), 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    });
});

//======PopUP form done==================================================================================================================================================
$('.open-popup').click(function(e) {
	e.preventDefault();
	$('.form-pop-up-bg').fadeIn(600);
	$('html').addClass('no-scroll');
});
$('.close-popup').click(function(e) {
	e.preventDefault();
	$('.form-pop-up-bg').fadeOut(600);
	$('html').removeClass('no-scroll');
});
$('.form-pop-up-bg').click(function (e) {
	if (!$(e.target).closest(".form-pop-up").length) {
		$('.form-pop-up-bg').fadeOut(600);
		$('html').removeClass('no-scroll');
	}
  });
//========================================================================================================================================================
$(".nominations-upper-screen__button").click(function() {
	$('html, body').animate({
	scrollTop: $(".participation-application__container").offset().top 
	}, 1000);
});

//=============Counter index.html===========================================================================================================================================
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

function countCallback() {
	jQuery(function ($) {
	  // custom formatting example
	  $('.count-number').data('countToOptions', {
		formatter: function (value, options) {
		  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
		}
	  });

	  // start all the timers
	  $('.timer').each(count);  
	  
	  function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		$this.countTo(options);
	  }
	});
};

// Детектить скролл до элемента elem, вернет true или falsee.
// Параметр elem - подставляешь элемент, которые будет в зоне видимости.
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function runCounter() {
	const countItems = document.querySelectorAll('.work-in-numbers');
	if (countItems.length > 0) {
		window.addEventListener('scroll', runCounter);

		// isScrolledIntoView с параметром (countItems) это - .work-in-numbers
		if (isScrolledIntoView(countItems)) {

			// Код который отрабатывает
			countCallback();

			// убиваем ивент, чтобы не срабатывал при кажлом скроле 
			window.removeEventListener('scroll', runCounter);
		};
	};
}
runCounter();

//======Animation==================================================================================================================================================

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		$('*').off('scroll', animOnScroll);
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	animOnScroll();
}

//=======SWIPER=================================================================================================================================================
new Swiper('.home-screen__swiper', {
	navigation: {
		nextEl: '.home-screen__slider-next',
		prevEl: '.home-screen__slider-prev'
		
	},
	grabCursor: true,
	spaceBetween: 26,
	loop: true,
	rewind: true,
	slidesPerView: 3,
	autoplay: {
		delay: 4000,
	  },
	  on: {
		init() {
		  this.el.addEventListener('mouseenter', () => {
			this.autoplay.stop();
		  });
	
		  this.el.addEventListener('mouseleave', () => {
			this.autoplay.start();
		  });
		}
	  },
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		320: {
			slidesPerView: 2,
		},
		540: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 2,
		},
		1090: {
			slidesPerView: 3,
		}
	},
	speed: 700,
});

let sliderOne = new Swiper('.left-slider__swiper', {
	grabCursor: true,
	spaceBetween: 30,
	loop: true,
	slidesPerView: 1,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	speed: 700,
});
let sliderTwo = new Swiper('.right-slider__swiper', {
	grabCursor: true,
	spaceBetween: 30,
	loop: true,
	slidesPerView: 1,
	navigation: {
		nextEl: '.big-slider__next',
		prevEl: '.big-slider__prev'
	},
	speed: 700,

});

sliderOne.controller.control = sliderTwo;
sliderTwo.controller.control = sliderOne;

new Swiper('.swiper-carousel', {
	grabCursor: true,
	spaceBetween: 0,
	loop: true,
	slidesPerView: 4,
	speed: 700,
	autoplay: {
		delay: 4000,
	  },
	  on: {
		init() {
		  this.el.addEventListener('mouseenter', () => {
			this.autoplay.stop();
		  });
	
		  this.el.addEventListener('mouseleave', () => {
			this.autoplay.start();
		  });
		}
	  },
	navigation: {
		nextEl: '.swiper-carousel__button-next',
		prevEl: '.swiper-carousel__button-prev'
		
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		320: {
			slidesPerView: 1,
		},
		540: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		}
	},
});

new Swiper('.about-project-swiper', {
	grabCursor: true,
	spaceBetween: 20,
	loop: true,
	slidesPerView: 2,
	autoplay: {
		delay: 4000,
	  },
	navigation: {
		nextEl: '.about-project-button-next',
		prevEl: '.about-project-button-prev'
	},
	speed: 700,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		1024: {
			slidesPerView: 2,
		}
	},
	on: {
		init() {
		  this.el.addEventListener('mouseenter', () => {
			this.autoplay.stop();
		  });
	
		  this.el.addEventListener('mouseleave', () => {
			this.autoplay.start();
		  });
		}
	  },
});

new Swiper('.nominations-slider__swiper', {
	grabCursor: true,
	loop: true,
	slidesPerView: 1,
	autoplay: {
		delay: 4000,
	  },
	navigation: {
		nextEl: '.about-project-button-next',
		prevEl: '.about-project-button-prev'
	},
	speed: 700,
	on: {
		init() {
		  this.el.addEventListener('mouseenter', () => {
			this.autoplay.stop();
		  });
	
		  this.el.addEventListener('mouseleave', () => {
			this.autoplay.start();
		  });
		}
	  },
});

new Swiper('.nominations-slider-gallery__swiper', {
	grabCursor: true,
	loop: true,
	slidesPerView: 3,
	spaceBetween: 20,
	centeredSlides: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		320: {
			slidesPerView: 1,
		},
		540: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		}
	},
	autoplay: {
		delay: 4000,
	  },
	navigation: {
		nextEl: '.nominations-slider-gallery__next',
		prevEl: '.nominations-slider-gallery__prev'
	},
	speed: 700,
	on: {
		init() {
		  this.el.addEventListener('mouseenter', () => {
			this.autoplay.stop();
		  });
	
		  this.el.addEventListener('mouseleave', () => {
			this.autoplay.start();
		  });
		}
	  },
});

new Swiper('.data-sources__swiper', {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 20,
	autoplay: {
		delay: 0,
	  },
	speed: 2000,
	on: {
		init() {
		  this.el.addEventListener('mouseenter', () => {
			this.autoplay.stop();
		  });
	
		  this.el.addEventListener('mouseleave', () => {
			this.autoplay.start();
		  });
		}
	  },
});
//========Interactive Map================================================================================================================================================
let tooltip = document.querySelector('.tooltip');
let continents = document.querySelectorAll('.continent');

continents.forEach(continent => {
	continent.addEventListener('mousemove', function(e) {
		tooltip.innerText = this.dataset.tooltip;
		tooltip.style.top = (e.y + 20) + 'px';
		tooltip.style.left = (e.x + 20) + 'px';
	});

	continent.addEventListener('mouseenter', function() {
		tooltip.style.display = 'block';
	});

	continent.addEventListener('mouseleave', function() {
		tooltip.style.display = 'none';
	});
});

//=========COOKIE===============================================================================================================================================

const COOKIE_NAME = 'visit'
const cookieAlert = document.querySelector('.cookie-alert')
const cookieBtn = document.querySelector('.cookie-alert-btn')

if (!Cookies.get(COOKIE_NAME)) {
	setTimeout(() => {
		cookieAlert.classList.add('is-show')
	}, 1000);
	cookieBtn.addEventListener('click', () => {
		cookieAlert.classList.remove('is-show')

		Cookies.set(COOKIE_NAME, true, { expires: 30 })
	})
}
