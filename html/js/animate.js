var count = 0;
var switchy = false;


function animate() {
  count += 0.1;
  displacementFilter.offset.x = count * 10;
  displacementFilter.offset.y = count * 10;

  pondContainer.filters = addFilters(filterCollection);

  fishAnimation(fishs, bounds);

  renderer.render(stage);
  requestAnimFrame(animate);
}
requestAnimFrame(animate);

function addFilters(filterCollection) {
  var filtersToApply = [];
  for (var i = 0; i < filterCollection.length; i++) {
    if (filtersSwitchs[i]) filtersToApply.push(filterCollection[i]);
  }

  return filtersToApply.length > 0 ? filtersToApply : null;
}

function fishAnimation(fishs, bounds) {
  for (var i = 0; i < fishs.length; i++) {
    var fish = fishs[i];

    fish.direction += fish.turnSpeed * 0.01;
    fish.position.x += Math.sin(fish.direction) * fish.speed;
    fish.position.y += Math.cos(fish.direction) * fish.speed;

    fish.rotation = -fish.direction - Math.PI / 2;

    // wrap..
    if (fish.position.x < bounds.x) fish.position.x += bounds.width;
    if (fish.position.x > bounds.x + bounds.width)
      fish.position.x -= bounds.width;

    if (fish.position.y < bounds.y) fish.position.y += bounds.height;
    if (fish.position.y > bounds.y + bounds.height)
      fish.position.y -= bounds.height;
  }
}
