const animals = [];
const totalanimals = 110;
for (let i = 0; i < totalanimals; i++) {
  var animalId = (i % 48) + 1;
  const animal = PIXI.Sprite.from("animal" + animalId + ".png");
  //const animal = PIXI.Sprite.from("animal1.png");
  animal.anchor.set(0.5);
  container.addChild(animal);
  animal.interactive = true;

  animal
    .on("mousedown", onButtonDown)
    .on("touchstart", onButtonDown)
    .on("mouseup", onButtonUp)
    .on("touchend", onButtonUp)
    .on("mouseupoutside", onButtonUp)
    .on("touchendoutside", onButtonUp)

    // set the mouseover callback...
    .on("mouseover", onButtonOver)

    // set the mouseout callback...
    .on("mouseout", onButtonOut);
  animal.direction = Math.random() * Math.PI * 2;
  let random = Math.random();
  animal.speed = 0.05 + random * 0.5;
  animal.turnSpeed = 0.5;

  animal.x = Math.random() * bounds.width;
  animal.y = Math.random() * bounds.height;
  animal.scale.set(0.07 + Math.random() * 0.09);
  animal.rateTinker = 1;
  animal.palpitationOffset = Math.random();
  animal.palpitationRate = Math.random();
  animal.original = new PIXI.Point();
  animal.original.copyFrom(animal.scale);
  animal.alpha = 0.1 + (i / totalanimals) * 0.9;
  animals.push(animal);
}
function animalAnimation(animals, bounds, count) {
  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
   animal.direction += animal.turnSpeed * 0.01;
    //animal.direction += 2 * Math.PI;
    //animal.x += animalXPosition(1, 2 * animal.direction);
    animal.x += animalXPosition(animal.speed, 2 * animal.direction);
    animal.y += animalYPosition(animal.speed, 2 * animal.direction);
    animal.blendMode = PIXI.BLEND_MODES.LIGHTEN;
    animal.rotation = -animal.direction - Math.PI / 2;
    animal.scale.x =
      animal.original.x +
      Math.sin(
        count * animal.speed * 3 + animal.palpitationOffset * 2 * Math.PI
      ) *
        0.02;
    // animal.scale.y =
    //   animal.original.y +
    //   Math.cos(
    //     (count * animal.rateTinker + animal.palpitationOffset * 2 * Math.PI) /
    //       (1 + animal.palpitationRate)
    //   ) *
    //     0.01;
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
function animalXPosition(speed, angle) {
  return Math.sin(angle) * speed * 2;
}
function animalYPosition(speed, angle) {
  return Math.cos(angle) * speed * 2;
}
function onButtonDown() {
  console.log(this.rateTinker);
  this.rateTinker = this.rateTinker * 4;
  this.speed = this.speed * 1.2;
}

function onButtonUp() {}

function onButtonOver() {}

function onButtonOut() {
  this.rateTinker = 1;
}
