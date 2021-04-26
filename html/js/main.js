var renderer = PIXI.autoDetectRenderer(630, 410);
renderer.view.style.position = "absolute";
renderer.view.style.width = window.innerWidth + "px";
renderer.view.style.height = window.innerHeight + "px";
renderer.view.style.display = "block";
document.body.appendChild(renderer.view);

// create an new instance of a pixi stage
var stage = new PIXI.Stage(0xff0000, true);
var pondContainer = new PIXI.DisplayObjectContainer();
stage.addChild(pondContainer);
stage.interactive = true;
var bg = PIXI.Sprite.fromImage("displacement_BG.jpg");
pondContainer.addChild(bg);

var padding = 100;
var bounds = new PIXI.Rectangle(
  -padding,
  -padding,
  630 + padding * 2,
  410 + padding * 2
);


// var overlay = new PIXI.TilingSprite(
//   PIXI.Texture.fromImage("zeldaWaves.png"),
//   630,
//   410
// );
// overlay.alpha = 0.1; //0.2
// pondContainer.addChild(overlay);

//pondContainer.filters = [displacementFilter];

// displacementFilter.scale.x = 50;
// displacementFilter.scale.y = 50;

