var fishs = [];

for (var i = 0; i < 20; i++) {
  var fishId = i % 4;
  fishId += 1;
  var fish;
  //console.log("displacement_fish"+fishId+".png")
  if (fishId == 4) {
    fish = PIXI.Sprite.fromImage("displacement_fish" + fishId + ".png");
  } else {
    fish = PIXI.Sprite.fromImage("light_bug.png");
  }

  //var fish =  PIXI.Sprite.fromImage("buble.png");
  fish.anchor.x = fish.anchor.y = 0.5;
  pondContainer.addChild(fish);

  //var direction
  //var speed =
  fish.direction = Math.random() * Math.PI * 2;
  fish.speed = 2 + Math.random() * 2;
  fish.turnSpeed = Math.random() - 0.8;

  fish.position.x = Math.random() * bounds.width;
  fish.position.y = Math.random() * bounds.height;
  //fish.speed = new PIXI.Point(0,0)

  fish.scale.x = fish.scale.y = 0.8 + Math.random() * 0.3;
  fishs.push(fish);
}