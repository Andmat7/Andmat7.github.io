var count = 0;
var switchy = false;
requestAnimFrame(animate);
function animate() {
    count += 0.1;
  
    var blurAmount = Math.cos(count);
    var blurAmount2 = Math.sin(count * 0.8);
  
    var filtersToApply = [];
  
    for (var i = 0; i < filterCollection.length; i++) {
      if (filtersSwitchs[i]) filtersToApply.push(filterCollection[i]);
    }
  
    pondContainer.filters =
      filtersToApply.length > 0 ? filtersToApply : null;
  
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
  
    displacementFilter.offset.x = count * 10;
    displacementFilter.offset.y = count * 10;
  
  
  
    renderer.render(stage);
    requestAnimFrame(animate);
  }