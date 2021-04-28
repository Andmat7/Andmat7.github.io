const canvas = document.getElementById("mycanvas");
const renderer = new PIXI.Renderer({
  view: canvas,
  height: window.innerHeight,
  width: window.innerWidth,
  resolution: 2,
  autoDensity: true,
});
const container = new PIXI.Container();
container.interactive = true;
const padding = 100;
const bounds = new PIXI.Rectangle(
  -padding,
  -padding,
  window.innerWidth + padding * 2,
  window.innerHeight + padding * 2
);
const bg = PIXI.Sprite.from("displacement_BG.jpg");
bg.width = window.innerWidth;
bg.height = window.innerHeight;
bg.alpha = 0.4;

container.addChild(bg);
