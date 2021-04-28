// function animate() {

//   pondContainer.filters = addFilters();
//   count += 0.1;

//   renderer.render(stage);
//   requestAnimFrame(animate);
// }

let count = 0;

const ticker = new PIXI.Ticker();
ticker.add(animation);
renderer.render(container);
function animation(delta) {
  count += 0.05;
  animalAnimation(animals, bounds, count);
  renderer.render(container);
}
ticker.start();
