export function global() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });

  let burgerBtn = document.querySelector('.js-burger');

  if (burgerBtn) {
    burgerBtn.addEventListener('click', function () {
      burgerBtn.classList.toggle('burger--active');
      if (burgerBtn.nextElementSibling.classList.contains('js-menubox')) {
        burgerBtn.nextElementSibling.classList.toggle('menu__box--open');
      }
    })
  }

  let header = document.querySelector('.header');
  let headerHeight = header.clientHeight;
  let menuBox = document.querySelector('.js-menubox');

  menuBox.style.paddingTop = String(headerHeight + 'px');;

  let headerPopupClose = document.querySelector('.js-popup-close');
  let searchPopupLink = document.querySelector('.js-search-link');
  let searchLinkAtribute = searchPopupLink.getAttribute('href').replace('#', '');
  let currentPopup = document.getElementById(searchLinkAtribute);

  headerPopupClose.addEventListener('click', function () {
    currentPopup.classList.remove('search-popup--active');
  })

  searchPopupLink.addEventListener('click', function (e) {
    e.preventDefault();

    currentPopup.classList.add('search-popup--active');
  })


  let minResize = false;
  let maxResize = false;

  var f_windowWidth = function (w) {

    if (w <= n && !minResize) {
      minResize = true;
      maxResize = false;

      let siteContainer = document.querySelector('.js-wrapper');

      if (burgerBtn.classList.contains('burger--active')) {
        siteContainer.classList.add('site-container--lock');
      } else {
        siteContainer.classList.remove('site-container--lock');
      }

      if (burgerBtn) {
        burgerBtn.addEventListener('click', function () {
          if (burgerBtn.classList.contains('burger--active')) {
            siteContainer.classList.add('site-container--lock');
          } else {
            siteContainer.classList.remove('site-container--lock');
          }
        })
      }

      let body = document.querySelector('body');

      body.addEventListener('click', function (e) {
        if (!e.target.classList.contains('js-menulist') && !e.target.classList.contains('js-burger')) {
          burgerBtn.classList.remove('burger--active');
          siteContainer.classList.remove('site-container--lock');
          if (burgerBtn.nextElementSibling.classList.contains('js-menubox')) {
            burgerBtn.nextElementSibling.classList.remove('menu__box--open');
          }
        }

        if (!e.target.classList.contains('js-menulist') && !e.target.classList.contains('js-burger')) {
          burgerBtn.classList.remove('burger--active');
          siteContainer.classList.remove('site-container--lock');
          if (burgerBtn.nextElementSibling.classList.contains('js-menubox')) {
            burgerBtn.nextElementSibling.classList.remove('menu__box--open');
          }
        }
      })
      console.log("Window width <= " + n);
    }

    if (w >= n && !maxResize) {
      maxResize = true;
      minResize = false;

      let siteContainer = document.querySelector('.js-wrapper');

      if (siteContainer.classList.contains('site-container--lock')) {
        siteContainer.classList.remove('site-container--lock');
      }
      console.log("Window width > " + n);
    }
  };

  let n = 992,
    w = window.innerWidth;

  f_windowWidth(w);

  window.addEventListener('resize', function () {
    let w = window.innerWidth;
    f_windowWidth(w);
  });
}