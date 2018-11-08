'use strict';

(function() {

  //Carousel brands
  $(".owl-carousel").owlCarousel({
    margin: 30,
    dots: false,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      768: {
        items: 4,
      },
      1200: {
        items: 6,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
      },
    }
  });

  //Input mask

  $('input[type="tel"]').mask('+7 (999) 999-9999');

  //Popups

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var popupWrapper = document.querySelector('.popup-wrapper');
  var status = document.querySelector('.top-line__status');
  var miniPop = document.querySelector('.mini-pop');
  var buttonClose = document.querySelector('.popup__close');

  //Функция открытия попапа
  var openPopup = function(linkOpenPopup, popup) {
    linkOpenPopup.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.add('popup--show');
      popupWrapper.classList.add('popup-wrapper--show');

      //var popupPhone = popup.querySelector('input[type="tel"]');
      //popupPhone.focus();

      document.addEventListener('keydown', onPopupEscPress);
    });
  };

  //Функция закрытия попапа
  var closePopup = function(linkClosePopup, popup) {
    linkClosePopup.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.remove('popup--show');
      popupWrapper.classList.remove('popup-wrapper--show');
      document.removeEventListener('keydown', onPopupEscPress);
    });
  };

  //Функция для закрытия попапов с помощью ESC
  var onPopupEscPress = function(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeAll();
    }
  };

  var closeAll = function() {
    var popups = document.querySelectorAll('.popup');
    for (var i = 0; i < popups.length; i++) {
      popups[i].classList.remove('popup--show');
    }
    popupWrapper.classList.remove('popup-wrapper--show');
  }

  popupWrapper.addEventListener("click", function(evt) {
    if (document.activeElement.tagName.toLowerCase() !== 'input') {
      closeAll();
    }
  });

  openPopup(status, miniPop);

  closePopup(buttonClose, miniPop);
})();
