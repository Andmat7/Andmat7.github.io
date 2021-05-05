const logo = PIXI.Sprite.from("genomica_logo_transparent.png");
logo.scale.set(0.25);
logo.interactive = true;
container.addChild(logo);
logo.position.y = window.innerHeight - 60;
logo.position.x = 12;
logo.on("click", function () {
  canvas.requestFullscreen();
});

let overlay = new PIXI.Container();
overlay.width = window.innerWidth;
overlay.height = window.innerHeight;

// var BlurFilter = new PIXI.filters.BlurFilter(
//   15,
//   10,
//   PIXI.settings.FILTER_RESOLUTION,
//   5
// );

// // Blurs whatever is rendered by the container
// overlay.filters = [BlurFilter];

// Only the contents within a circle at the center should be rendered onto the screen.
// overlay.mask = new PIXI.Graphics()
//   .beginFill(0xff0000)
//   .drawRect(10, 10, 1000, 1000)
//   .endFill();

let text = new PIXI.Text("SPECIES", {
  fontFamily: "andale",
  fontSize: 24,
  fill: "white",
  align: "center",
});
overlay.addChild(text);
container.addChild(overlay);
