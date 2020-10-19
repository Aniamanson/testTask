

ymaps.ready(init);

function init() {

  var map = new ymaps.Map("yMap", {
    // Центр карты
    center: [48.87, 58.23],
    // Коэффициент масштабирования
    zoom: 4,
    // Тип карты
    type: "yandex#map",
    controls: []
  });

  var setCenter = function (x, y) {
    map.setCenter(x, y)
  }

  window.addEventListener('resize', function () {
    if (document.body.clientWidth < 650) {
      setCenter([48.87, 40.23], 5)
    } else {
      setCenter([48.87, 58.23], 4)
    }
  });

  map.behaviors.disable(['drag', 'rightMouseButtonMagnifier', 'scrollZoom'])

  const style = {
    hideIconOnBalloonOpen: false,
    iconLayout: 'default#image',
    iconImageHref: '/img/pin.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-5, -38]
  }

  const placemark = [];
  const cities = [[55.753215, 37.622504], [48.707067, 44.516948], [51.533557, 46.034257],
    [45.035470, 38.975313], [51.660781, 39.200269], [40.177628, 44.512546], [55.030199, 82.920430]];

  cities.forEach(function (item) {
    placemark.push(
      new ymaps.Placemark(item, null, style)
    );
  })


  placemark.forEach(function (item) {
    map.geoObjects.add(item);
  });
}

