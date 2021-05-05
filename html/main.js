function width() {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth ||
    0
  );
}

function height() {
  return (
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight ||
    0
  );
}
const canvas = document.getElementById("mycanvas");
const renderer = new PIXI.Renderer({
  view: canvas,
  height: window.innerHeight,
  width: document.documentElement.clientWidth,
  autoDensity: true,
});
const container = new PIXI.Container({ resizeTo: window });
const zoo = new PIXI.Container({ resizeTo: window });
zoo.interactive = true;
const padding = 100;
const bounds = new PIXI.Rectangle(
  -padding,
  -padding,
  window.innerWidth + padding * 2,
  window.innerHeight + padding * 2
);
container.addChild(zoo);
window.onresize = resize;
function resize() {
  logo.position.y = window.innerHeight - 80;
  logo.position.x = 12;
  bounds.width = width() + padding * 2;
  bounds.height = height() + padding * 2;
  renderer.resize(window.innerWidth, window.innerHeight);
}
