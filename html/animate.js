// var count = 0;

// function animate() {
//   renderer.view.style.position = "absolute";
//   renderer.view.style.width = window.innerWidth + "px";
//   renderer.view.style.height = window.innerHeight + "px";
//   renderer.view.style.display = "block";
//   document.body.appendChild(renderer.view);
//   pondContainer.filters = addFilters();
//   count += 0.1;
//   displacementFilter.offset.x = count * 10;
//   displacementFilter.offset.y = count * 10;
//   fishAnimation(animals, bounds,count);
//   renderer.render(stage);
//   requestAnimFrame(animate);
// }
// requestAnimFrame(animate);


let count = 0;

app.ticker.add(() => {
  count += 0.05;
  animalAnimation(animals, bounds, count);

  // for (let i = 0; i < animals.length; i++) {
  //   animalAnimation(animals, bounds, count)
  //   const animal = animals[i];

  //   animal.direction += animal.turnSpeed * 0.01;
  //   animal.x += Math.sin(animal.direction) * animal.speed;
  //   animal.y += Math.cos(animal.direction) * animal.speed;

  //   animal.rotation = -animal.direction - Math.PI / 2;
  //   animal.scale.x = animal.original.x + Math.sin(count + animal.rateTinker) * 0.04;

  //   // wrap the maggots around as the crawl
  //   if (animal.x < bounds.x) {
  //     animal.x += bounds.width;
  //   } else if (animal.x > bounds.x + bounds.width) {
  //     animal.x -= bounds.width;
  //   }

  //   if (animal.y < bounds.y) {
  //     animal.y += bounds.height;
  //   } else if (animal.y > bounds.y + bounds.height) {
  //     animal.y -= bounds.height;
  //   }
  // }
});
