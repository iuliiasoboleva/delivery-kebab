function init_maps() {
  const mapsArr = document.getElementsByClassName('listing_map');
  [...mapsArr].forEach((map) => {
    const [cX, cY] = map.dataset.coords.split(',');
    const id = map.dataset.id;
    const [cXU, cYU] = document
      .getElementById('userData')
      .dataset.coords.split(',');
    const init_map = () => {
      const myMap = new ymaps.Map(`map_${id}`, {
        center: [+cX, +cY],
        zoom: 11,
      });
      const pointA = [+cX, +cY];
      const pointB = [+cXU, +cYU];
      const multiRoute = new ymaps.multiRouter.MultiRoute(
        {
          referencePoints: [pointA, pointB],
          params: {
            routingMode: 'pedestrian',
          },
        },
        {
          boundsAutoApply: true,
        },
      );
      myMap.geoObjects.add(multiRoute);
    };
    ymaps.ready(init_map);
  });
}

function sort_area() {
  const userXY = document.getElementById('userData').dataset.coords.split(',');
  const mainWrapper = document.getElementById('mainBuyers');
  const divs = [...document.getElementsByClassName('products')];
  divs.forEach((div, i) => {
    const courXY = div.dataset.coords.split(',');
    const ras = Math.hypot(
      Math.abs(courXY[0]) - Math.abs(userXY[0]),
      Math.abs(courXY[1]) - Math.abs(userXY[1]),
    );
    divs[i].dataset.way = ras;
  });
  const sorted = divs.sort((a, b) => {
    return a.dataset.way - b.dataset.way;
  });
  mainWrapper.innerHTML = '';
  sorted.forEach((item) => {
    mainWrapper.append(item);
  });
  init_maps();
}

sort_area();
