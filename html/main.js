const app = new PIXI.Application({
  height: window.innerHeight * 1.99,
  width: window.innerWidth * 1.99,
  resolution: 0.5,
});
document.body.appendChild(app.view);
app.stage.interactive = true;
const container = new PIXI.Container();
app.stage.addChild(container);
const padding = 100;
const bounds = new PIXI.Rectangle(
  -padding,
  -padding,
  app.screen.width + padding * 2,
  app.screen.height + padding * 2
);
const bg = PIXI.Sprite.from("displacement_BG.jpg");
bg.width = app.screen.width;
bg.height = app.screen.height;

bg.alpha = 0.4;

container.addChild(bg);
