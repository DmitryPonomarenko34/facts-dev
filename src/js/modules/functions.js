export function global() {
  let burgerBtn = document.querySelector('.js-burger');

  if (burgerBtn) {
    burgerBtn.addEventListener('click', function () {
      burgerBtn.classList.toggle('burger--active');
      if (burgerBtn.nextElementSibling.classList.contains('js-menubox')) {
        burgerBtn.nextElementSibling.classList.toggle('menu__box--open');
      }
    })
  }

  let header = document.querySelector('.js-header');
  let headerHeight = header.clientHeight;
  let menuBox = document.querySelector('.js-menubox');

  menuBox.style.paddingTop = String(headerHeight + 'px');

  let headerPopupClose = document.querySelector('.js-popup-close');
  let searchPopupLink = document.querySelector('.js-search-link');
  let searchLinkAtribute = searchPopupLink.getAttribute('href').replace('#', '');
  let currentPopup = document.getElementById(searchLinkAtribute);
  let documentBody = document.querySelector('.js-body');

  headerPopupClose.addEventListener('click', function () {
    currentPopup.classList.remove('search-popup--active');
    documentBody.classList.remove('body--lock');
  })

  searchPopupLink.addEventListener('click', function (e) {
    e.preventDefault();

    currentPopup.classList.add('search-popup--active');
    documentBody.classList.add('body--lock');
  })


  let minResize = false;
  let maxResize = false;

  var f_windowWidth = function (w) {

    if (w <= n && !minResize) {
      minResize = true;
      maxResize = false;


      if (burgerBtn.classList.contains('burger--active')) {
        documentBody.classList.add('body--lock');
      } else {
        documentBody.classList.remove('body--lock');
      }

      if (burgerBtn) {
        burgerBtn.addEventListener('click', function () {
          if (burgerBtn.classList.contains('burger--active')) {
            documentBody.classList.add('body--lock');
          } else {
            documentBody.classList.remove('body--lock');
          }
        })
      }

      documentBody.addEventListener('click', function (e) {

        if (!e.target.classList.contains('js-menulist') && !e.target.classList.contains('js-burger')) {
          burgerBtn.classList.remove('burger--active');
          documentBody.classList.remove('body--lock');
          if (burgerBtn.nextElementSibling.classList.contains('js-menubox')) {
            burgerBtn.nextElementSibling.classList.remove('menu__box--open');
          }
        }
      })
    }

    if (w >= n && !maxResize) {
      maxResize = true;
      minResize = false;

      if (burgerBtn.classList.contains('burger--active')) {
        documentBody.classList.remove('body--lock');
      }
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