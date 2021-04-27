var count = 0;

function animate() {
  renderer.view.style.position = "absolute";
  renderer.view.style.width = window.innerWidth + "px";
  renderer.view.style.height = window.innerHeight + "px";
  renderer.view.style.display = "block";
  document.body.appendChild(renderer.view);
  pondContainer.filters = addFilters();
  count += 0.1;
  displacementFilter.offset.x = count * 10;
  displacementFilter.offset.y = count * 10;
  fishAnimation(fishs, bounds);
  renderer.render(stage);
  requestAnimFrame(animate);
}
requestAnimFrame(animate);
