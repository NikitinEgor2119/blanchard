// menu

const params = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
};

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(
      params.disabledClassName,
      params.activeClassName
    );
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(
      `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
    );

    if (
      activeElements.length &&
      !evt.target.closest(`.${params.activeClassName}`)
    ) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(
        `.${params.dropClassName}[data-target="${path}"]`
      );

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();

// burger
document.querySelector(".burger").addEventListener("click", function() {
	document.querySelector(".header-top__nav").classList.toggle("active");
})
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header-top__nav');
const body = document.body;
const menuLinks = document.querySelectorAll('.nav__link');
const close = document.querySelector('.close-form');
const search = document.querySelector('.search');


burger.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('burger--active');
  menu.classList.toggle('header-top__nav--active');
  body.classList.toggle('stop-scroll');
  burger.classList.toggle('active');
});

menuLinks.forEach(el => {
  el.addEventListener('click', (e) => {
    burger.classList.remove('burger--active');
    menu.classList.remove('header-top__nav--active');
    body.classList.remove('stop-scroll');
  });
});





// document.querySelector(".burger").addEventListener("click", function() {
//   document.querySelector(".header-top__nav").classList.add("active");
//   document.querySelector(".body").classList.add("stop-scroll");
  
// })
// document.querySelector(".header-top__nav-close").addEventListener("click", function() {

  

//   document.querySelector(".header-top__nav").classList.remove("active");
//   document.querySelector(".body").classList.remove("stop-scroll");
  
// })

// search-form-mobile

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
      document.getElementById('search-form').classList.add('search-form-mobile_show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form-mobile_show')
  })
  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})


// свайпер
const swiper = new Swiper('.swiper-container-hero', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000
  }
});

// choice

document.addEventListener("DOMContentLoaded", function () {
  const selector = document.querySelector("#choices")
  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices header_choices',
    },
    shouldSort: false,
    allowHTML: true,
  });
});


// galery-swiper

document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".swiper-container-galery", {
    autoplay: false,
    speed:1000,
    slidesPerView: 1,
    slidesPerGroup: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".test-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".test-next",
      prevEl: ".test-prev",
    },

    breakpoints: {
      441: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 35,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

   


    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }




    
    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
});



// аккордеон+табы

// аккордеон


  (() => {
    new Accordion(".js-accordion-container", {
      openOnInit: [0]
    });
  })();


  // табы

  document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
    btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');
  document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
    tabsBtn.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});




$('.js-tab-btn').click(function(event) {
  console.log(111)
  $('.js-tab-btn').removeClass('tab-active')
  $(this).addClass('tab-active');
});

//  события-свайпер

const swiper2 = new Swiper('.swiper-container-events', {
  slidesPerGroup: 1,
  slidesPerView: 1,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.two-btn-next',
    prevEl: '.two-btn-prev',
  },

  breakpoints: {
    1770: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    1023: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
    670: {
      slidesPerView:2,
      slidesPerGroup: 2,
      spaceBetween: 35,
    },    
    630: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
  }
  

});

// projects-swiper

const swiper3 = new Swiper('.three-swiper', {
  slidesPerView: 1,
  spaceBetween: 50,
  // If we need pagination
  
  pagination: {
    el: '.three-pagination',
  },

  breakpoints: {
    441: {
      slidesPerView: 2,
      spaceBetween: 35
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.three-btn-next',
    prevEl: '.three-btn-prev',
  },

});


// validation

let validition = new JustValidate('#form')

let selector = document.querySelector('#phone')

let im = new Inputmask('+7(999)999-99-99')

im.mask(selector)

validition.addField('#name', [
  {
    rule : 'required',
    errorMessage: 'Вы не ввели имя'
  },
  {
    rule : 'minLength',
    value : 2,
    errorMessage : 'Минимум 2 символа'
  },
])


.addField('#phone', [
  {
    validator : (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length >0);
    },
    errorMessage: 'Вы не ввели телефон'
  },
  {
    validator : (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length == 10);
    },
    errorMessage: 'Введите телефон полностью'
  },
])

// map

ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    { 
      center: [55.75846806898367, 37.60108849999989], 
      zoom: 14, 
      controls: ['geolocationControl', 'zoomControl']
    },
    { 
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );
  
  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/point.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-20, -40],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  

  function toggle () {
    bigMap = !bigMap;

    // Добавляем/убираем CSS-класс, определяющий размеры контейнера карты,
    // заданные в абсолютных единицах (300x200 px).
    if (bigMap) {
        $('#map').removeClass('smallMap');
    } else {
        $('#map').addClass('smallMap');
    }

    // Если выставлен флаг, сообщаем карте, что ей следует
    // привести свои размеры к размерам контейнера.
    if ($('#checkbox').prop('checked')) {
        myMap.container.fitToViewport();
    }
}
}

// slow-scroll

document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();

      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
      });
  });


  const MOBILE_WIDTH = 580;
	
	function getWindowWidth () {
	  return Math.max(
	    document.body.scrollWidth,
	    document.documentElement.scrollWidth,
	    document.body.offsetWidth,
	    document.documentElement.offsetWidth,
	    document.body.clientWidth,
	    document.documentElement.clientWidth
	  );
	}
	
	function scrollToContent (link, isMobile) {
		if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
			return;
		}
	
	  const href = link.getAttribute('href').substring(1);
	  const scrollTarget = document.getElementById(href);
	  const elementPosition = scrollTarget.getBoundingClientRect().top;
	
	  window.scrollBy({
	      top: elementPosition,
	      behavior: 'smooth'
	  });
	}
	
	document.querySelectorAll('.js-scroll-link').forEach(link => {
	  link.addEventListener('click', function(e) {
	      e.preventDefault();
        document.querySelector(".body").classList.remove("stop-scroll");
        document.querySelector(".header-top__nav").classList.remove("active");
        document.querySelector(".burger").classList.remove("active");
        
	      scrollToContent(this, true);
	  });
	});
})



// tippy




tippy('#tultip_1',  {
  content: 'Пример современных тенденций - современная методология разработки',
  theme: 'main',
});

tippy('#tultip_2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  theme: 'main',
});

tippy('#tultip_3', {
  content: 'В стремлении повысить качество',
  theme: 'main',
});