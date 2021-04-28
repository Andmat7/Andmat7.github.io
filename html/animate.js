// function animate() {

//   pondContainer.filters = addFilters();
//   count += 0.1;
//   displacementFilter.offset.x = count * 10;
//   displacementFilter.offset.y = count * 10;

//   renderer.render(stage);
//   requestAnimFrame(animate);
// }

let count = 0;

const ticker = new PIXI.Ticker();
ticker.add(animation);
function animation() {
  count += 0.05;
  animalAnimation(animals, bounds, count);
  renderer.render(container);
}
ticker.start();
