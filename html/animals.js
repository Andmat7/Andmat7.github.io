const animals = [];

for (let i = 0; i < 90; i++) {
  const animal = PIXI.Sprite.from("light_bug.png");
  animal.anchor.set(0.5);
  container.addChild(animal);

  animal.direction = Math.random() * Math.PI * 2;
  animal.speed = Math.random() * 2;
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
    animal.x += Math.sin(animal.direction) * animal.speed;
    animal.y += Math.cos(animal.direction) * animal.speed;

    animal.rotation = -animal.direction - Math.PI / 2;
    animal.scale.x = animal.original.x + Math.sin(count + animal.rateTinker) * 0.04;

    // wrap the animal around as the crawl
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
