var fishs = [];
for (var i = 0; i < 20; i++) {
  var fishId = i % 4;
  fishId += 1;
  var fish;
  if (fishId == 4) {
    fish = PIXI.Sprite.fromImage("displacement_fish" + fishId + ".png");
  } else {
    fish = PIXI.Sprite.fromImage("light_bug.png");
  }

  fish.anchor.x = fish.anchor.y = 0.5;
  pondContainer.addChild(fish);

  fish.direction = Math.random() * Math.PI * 2;
  fish.speed = 2 + Math.random() * 2;
  fish.turnSpeed = Math.random() - 0.8;

  fish.position.x = Math.random() * bounds.width;
  fish.position.y = Math.random() * bounds.height;


  fish.scale.x = fish.scale.y = 0.8 + Math.random() * 0.3;
  fishs.push(fish);
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