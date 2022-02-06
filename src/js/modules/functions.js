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

  if (window.screen.width <= 992) {
    let adaptiveMenu = document.querySelector('.js-header__list');
    let listItem = document.createElement('li');
    let menuList = document.querySelector('.js-menulist');
    let headerListItem = document.querySelectorAll('.js-header__list li.header__list-item');
    let headerListLink = document.querySelectorAll('.js-header__list a.header__list-link');

    for (let i = 0; i < headerListItem.length; i++) {
      headerListItem[i].classList.remove('header__list-item');
      headerListItem[i].classList.add('submenu__item');
    }

    for (let i = 0; i < headerListLink.length; i++) {
      headerListLink[i].classList.remove('header__list-link');
      headerListLink[i].classList.add('submenu__link');
    }

    listItem.className = 'menu__list-item js-listitem';
    listItem.innerHTML = '<span class="menu__list-caption">Важные</span>';

    adaptiveMenu.classList.remove('header__list');
    adaptiveMenu.classList.add('submenu');


    menuList.append(listItem);
    document.querySelector('.js-listitem').append(adaptiveMenu);

    let siteContainer = document.querySelector('.js-wrapper');

    if (burgerBtn) {
      burgerBtn.addEventListener('click', function () {
        siteContainer.classList.toggle('site-container--lock')
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
  }

  let headerPopup = document.querySelector('.js-popup');
  let headerPopupClose = document.querySelector('.js-popup-close');
  let searchPopupLink = document.querySelector('.js-search-link');

  headerPopupClose.addEventListener('click', function () {
    headerPopup.classList.remove('search-popup--active');
  })

  searchPopupLink.addEventListener('click', function () {
    headerPopup.classList.add('search-popup--active');
  })
}