const animals = [];

for (let i = 0; i < 150; i++) {
  var animalId = i % 3+1;
  const animal = PIXI.Sprite.from("animal"+animalId+".png");
  animal.anchor.set(0.5);
  container.addChild(animal);

  animal.direction = Math.random() * Math.PI * 2;
  let random = Math.random();
  animal.speed = 0.2 + random*.7;
  animal.turnSpeed = 0.5;

  animal.x = Math.random() * bounds.width;
  animal.y = Math.random() * bounds.height;

  animal.scale.set(0.07 + Math.random() * 0.09);
  animal.rateTinker = Math.random() * Math.PI * 2;
  animal.original = new PIXI.Point();
  animal.original.copyFrom(animal.scale);

  animals.push(animal);
}
function animalAnimation(animals, bounds, count) {
  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];

    animal.direction += animal.turnSpeed * 0.01;
    animal.x += Math.sin(animal.direction) * animal.speed*2;
    animal.y += Math.cos(animal.direction) * animal.speed*1;

    animal.rotation = -animal.direction - Math.PI / 2;
    animal.scale.x =
      animal.original.x + Math.sin(count + animal.rateTinker) * 0.01;

    if (animal.x < bounds.x) {
      animal.x += bounds.width;
    } else if (animal.x > bounds.x + bounds.width) {
      animal.x -= bounds.width;
    }

    if (animal.y < bounds.y) {
      animal.y += bounds.height;
    } else if (animal.y > bounds.y + bounds.height) {
      animal.y -= bounds.height;
    }
  }
}
