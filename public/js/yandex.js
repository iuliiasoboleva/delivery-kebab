function init() {
  let myPlacemark,
    myMap = new ymaps.Map(
      'map',
      {
        center: [59.93, 30.31],
        zoom: 11,
      },
      {
        searchControlProvider: 'yandex#search',
      },
    );
  // Слушаем клик на карте.
  myMap.events.add('click', function (e) {
    let coords = e.get('coords');

    // Если метка уже создана – просто передвигаем ее.
    if (myPlacemark) {
      myPlacemark.geometry.setCoordinates(coords);
    }
    // Если нет – создаем.
    else {
      myPlacemark = createPlacemark(coords);
      myMap.geoObjects.add(myPlacemark);
      // Слушаем событие окончания перетаскивания на метке.
      myPlacemark.events.add('dragend', function () {
        getAddress(myPlacemark.geometry.getCoordinates());
      });
    }
    getAddress(coords);
  });

  // Создание метки.
  function createPlacemark(coords) {
    return new ymaps.Placemark(
      coords,
      {
        iconCaption: 'Поиск...',
      },
      {
        preset: 'islands#violetDotIconWithCaption',
        draggable: false,
      },
    );
  }

  // Определяем адрес по координатам (обратное геокодирование).
  function getAddress(coords) {
    myPlacemark.properties.set('iconCaption', 'поиск...');
    ymaps.geocode(coords).then(function (res) {
      let firstGeoObject = res.geoObjects.get(0);
      myPlacemark.properties.set({
        // Формируем строку с данными об объекте.
        iconCaption: [
          // Название населенного пункта или вышестоящее административно-территориальное образование.
          firstGeoObject.getLocalities().length
            ? firstGeoObject.getLocalities()
            : firstGeoObject.getAdministrativeAreas(),
          // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
          firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
        ]
          .filter(Boolean)
          .join(', '),
        // В качестве контента балуна задаем строку с адресом объекта.
        balloonContent: firstGeoObject.getAddressLine(),
      });
      registerAddress(coords, myPlacemark.properties.get('balloonContent'));
    });
  }
}

const registerAddress = (coords, name) => {
  const [cX, cY] = coords;
  const address = name;
  const aInput = document.getElementById('address');
  const cInput = document.getElementById('adCoords');
  aInput.value = address;
  cInput.value = `${cX},${cY}`;
};
