function activateSlide($el) {
  $el.addClass('active');
  $el.siblings('.element').removeClass('active').addClass('inactive');
}

$('.element').each(function() {
  var $this = $(this);
  $this.on('mouseover focus', function() {
    activateSlide($this);
  });
  $this.on('mouseleave blur', function() {
    $this.removeClass('active');
    $('.stage').children('.element').removeClass('inactive');
  });
  $this.on('click', function() {
    if ($this.hasClass('active')) {
      $this.removeClass('active');
      $('.stage').children('.element').removeClass('inactive');
    } else {
      activateSlide($this);
    }
  });
});
var mobileLogoBar = document.querySelector('.logo-container');
var mobileLogoMedia = window.matchMedia('(max-width: 767px)');

function toggleStickyHeaders() {
  var header = document.getElementById('scrollingHeader');
  if (header) {
    if (window.pageYOffset > 700) {
      header.classList.add('show-header');
    } else {
      header.classList.remove('show-header');
    }
  }

  if (mobileLogoBar) {
    var shouldShowMobile = mobileLogoMedia.matches && window.pageYOffset > 140;
    if (shouldShowMobile) {
      mobileLogoBar.classList.add('is-visible');
    } else {
      mobileLogoBar.classList.remove('is-visible');
    }
  }
}

document.addEventListener('scroll', toggleStickyHeaders);
toggleStickyHeaders();

if (mobileLogoMedia.addEventListener) {
  mobileLogoMedia.addEventListener('change', toggleStickyHeaders);
} else if (mobileLogoMedia.addListener) {
  mobileLogoMedia.addListener(toggleStickyHeaders);
}
if (typeof L !== 'undefined') {
  (function() {
    var mapContainer = document.getElementById('map');
    if (!mapContainer) {
      return;
    }
    var umeaCoords = [63.826851337015796, 20.26223015911486];
    var map = L.map(mapContainer, {
      center: umeaCoords,
      zoom: 16,
      zoomControl: false
    });
          L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
          }).addTo(map);
    L.control.zoom({ position: 'topright' }).addTo(map);
        var customIcon = L.icon({
          iconUrl: 'icons/pin.png',
          iconSize: [47, 64],
          iconAnchor: [24, 64],
          popupAnchor: [0, -58]
        });
    L.marker(umeaCoords, {
      icon: customIcon,
      title: 'Guldsaxen'
    }).addTo(map).bindPopup('<strong>Guldsaxen</strong><br>Skolgatan 58B, 903 27 Umeå');
  })();
}

(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var track = document.querySelector('.style-marquee-track');
    if (!track) {
      return;
    }

    var cardImages = [
      { src: 'cardpics/2025-11-07 at 16.44.46.jpeg', alt: 'Skin fade med tydliga linjer' },
      { src: 'cardpics/Image 2025-11-07 at 16.44.26.jpeg', alt: 'Klassisk kamfrisyr' },
      { src: 'cardpics/WhatsApp Image 2025-11-07 at 16.44.26.jpeg', alt: 'Snygg taper fade' },
      { src: 'cardpics/WhatsApp Image 2025-11-07 at 16.44.27.jpeg', alt: 'Kort fade med textur' },
      { src: 'cardpics/WhatsApp Image 2025-11-07 at 16.44.46.jpeg', alt: 'High fade och skarp kontur' },
      { src: 'cardpics/WhatsApp Image 2025-11-07 at 16.45.08.jpeg', alt: 'Skäggtrim med markerad linje' },
      { src: 'cardpics/WhatsApp Image 2025-11-07 at 16.45.09.jpeg', alt: 'Raka linjer och kort sidor' },
      { src: 'cardpics/WhatsApp Image 2025-11-07 at 16.45.46.jpeg', alt: 'Modern fade och part' },
      { src: 'cardpics/WhatsApp Image 2025-11-07 at 16.46.10.jpeg', alt: 'Volym på toppen med fade' },
      { src: 'cardpics/WhatsApp Image 2025-11-07 at 16.46.58.jpeg', alt: 'Rakfade med mjuk övergång' },
      { src: 'cardpics/WhatsApp Image 2025-11-07 at 16.47.18.jpeg', alt: 'Kreativ designlinje' },
      { src: 'cardpics/WhatsApp Imasge 2025-11-07 at 16.46.10.jpeg', alt: 'Detaljerad skäggform' },
      { src: 'cardpics/WhatsAspp Image 2025-s11-07 at 16.45.46.jpeg', alt: 'Fade med böjd rakning' }
    ];

    var shuffle = function(list) {
      var array = list.slice();
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    };

    var buildMarqueeCards = function() {
      track.innerHTML = '';
      var randomized = shuffle(cardImages);
      for (var loop = 0; loop < 2; loop++) {
        randomized.forEach(function(card) {
          var article = document.createElement('article');
          article.className = 'style-marquee-card';
          var img = document.createElement('img');
          img.src = card.src;
          img.alt = card.alt;
          img.loading = 'lazy';
          img.decoding = 'async';
          img.width = 480;
          img.height = 640;
          article.appendChild(img);
          track.appendChild(article);
        });
      }
    };

    buildMarqueeCards();
  });
})();

(function() {
  var burgerToggle = document.getElementById('burger');
  if (!burgerToggle) {
    return;
  }

  var navLinks = document.querySelectorAll('nav a');
  if (!navLinks.length) {
    return;
  }

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (burgerToggle.checked) {
        burgerToggle.checked = false;
      }
    });
  });
})();

