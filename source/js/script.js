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

  // Hide\Show form

  var hideButton = document.querySelector('.tabs__hide');
  var showButton = document.querySelector('.tabs__show');
  var contentElements = document.querySelectorAll('.tabs__content');
  var list = document.querySelector('.tabs__list');

  var labels = document.querySelectorAll('.tabs__label');

  hideButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    toggleBar();
  });

  //Открытие по клику на табы
  labels.forEach(function(elem) {
    elem.addEventListener('click', function(evt) {
    if (list.classList.contains('tabs__list--hide')) {
      toggleBar();
    }
    })
  })

  var toggleBar = function() {
    contentElements.forEach(function(elem) {
      elem.classList.toggle('tabs__content--hide');
    });
    list.classList.toggle('tabs__list--hide');
    hideButton.classList.toggle('tabs__show');
  }

  //Popups

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var popupWrapper = document.querySelector('.popup-wrapper');
  var status = document.querySelector('.top-line__status');
  var miniPop = document.querySelector('.mini-pop');
  var orderPop = document.querySelector('.order-pop');
  var buttonClose = document.querySelector('.popup__close');
  var reviewButton = document.querySelector('.reviews__add');
  var reviewPop = document.querySelector('.review-pop');
  var reviewButtonClose = document.querySelector('.review-pop__close');
  var orderButtonClose = document.querySelector('.order-pop__close');

  //Функция открытия попапа
  var openPopup = function(linkOpenPopup, popup) {
    linkOpenPopup.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.add('popup--show');
      popupWrapper.classList.add('popup-wrapper--show');

      var popupPhone = popup.querySelector('input[type="tel"]');

      if (popupPhone != undefined) {
        popupPhone.focus();
      }

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

  openPopup(status, orderPop);
  openPopup(reviewButton, reviewPop);

  closePopup(orderButtonClose, orderPop);
  closePopup(reviewButtonClose, reviewPop);

  //Map

  function createControl(text) {
    var div = document.createElement('div');
    div.style.width = '30px';
    div.style.height = '30px';
    div.style.padding = '10px';
    div.style.backgroundColor = '#ff8300';
    div.style.borderRadius = '50%';
    div.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    div.style.cursor = 'pointer';
    div.style.textAlign = 'center';
    div.style.fontSize = '30px';
    div.style.lineHeight = '30px';
    div.style.margin = '15px';
    div.style.color = '#ffffff';
    div.innerHTML = text;
    return div;
  }


  function zoomInControl(controlDiv, map) {
    var zoomIn = createControl('+');
    controlDiv.appendChild(zoomIn);

    zoomIn.addEventListener('click', function() {
      var zoom = map.getZoom();
      map.setZoom(zoom + 1);
    });
  }

  function zoomOutControl(controlDiv, map) {
    var zoomIn = createControl('-');
    controlDiv.appendChild(zoomIn);

    zoomIn.addEventListener('click', function() {
      var zoom = map.getZoom();
      map.setZoom(zoom  - 1);
    });
  }


  function initMap() {
    var mapOptions = {
      disableDefaultUI: true,
      scrollwheel: false,
      gestureHandling: 'greedy',
      zoom: 14,
      center: new google.maps.LatLng(59.9402896, 30.3246479),
      styles: [
      {
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#f5f5f5"
        }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
        {
          "visibility": "off"
        }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#616161"
        }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
        {
          "color": "#f5f5f5"
        }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#bdbdbd"
        }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#eeeeee"
        }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#757575"
        }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#e5e5e5"
        }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#9e9e9e"
        }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#ffffff"
        }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
        {
          "color": "#eeeeee"
        }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#757575"
        }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#dadada"
        }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#616161"
        }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
        {
          "color": "#4d5052"
        }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#9e9e9e"
        }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#e5e5e5"
        }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#eeeeee"
        }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#c9c9c9"
        }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
        {
          "color": "#00a9df"
        }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "color": "#9e9e9e"
        }
        ]
      }
      ],
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var zoomInWrap = document.createElement('div');
    var zoomIn = new zoomInControl(zoomInWrap, map);
    var zoomIn = new zoomOutControl(zoomInWrap, map);


    document.querySelector('.map-nav').appendChild(zoomInWrap);

    var markerImageHover = new google.maps.MarkerImage(
      'img/map-pin.svg',
      new google.maps.Size(74, 74),
      new google.maps.Point(0,0),
      new google.maps.Point(37, 60),
      new google.maps.Size(74, 74)
      );

    var marker = new google.maps.Marker({
      position: map.getCenter(),
      map: map,
      icon: markerImageHover
    });

    google.maps.event.addListenerOnce(map, 'idle', function(){
      var map = document.getElementById('map');

      var labels = Array.prototype.slice.call( map.querySelector('.gm-style').childNodes );
      labels.forEach(function(item, index){
        if (index === 0) return;

        item.remove();
      });
    });

  };

  initMap();

})();
