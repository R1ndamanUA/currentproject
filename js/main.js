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