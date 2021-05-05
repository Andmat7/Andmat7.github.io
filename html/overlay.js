const logo = PIXI.Sprite.from("genomica_logo_transparent.png");
logo.scale.set(0.25);
logo.interactive = true;
zoo.addChild(logo);
logo.position.y = window.innerHeight - 60;
logo.position.x = 12;
  logo.on("click", function () {
    canvas.requestFullscreen();
  });

let overlay = new PIXI.Container();
overlay.width = window.innerWidth;
overlay.height = window.innerHeight;

var BlurFilter = new PIXI.filters.BlurFilter(
  15,
  10,
  PIXI.settings.FILTER_RESOLUTION,
  5
);

// // Blurs whatever is rendered by the container
//zoo.filters = [BlurFilter];

// Only the contents within a circle at the center should be rendered onto the screen.
overlay.mask = new PIXI.Graphics()
  .beginFill(0xff0000)
  .drawRect(10, 10, 1000, 1000)
  .endFill();

let text = new PIXI.Text("SPECIES", {
  fontFamily: "andale",
  fontSize: 24,
  fill: "white",
  align: "center",
});
overlay.addChild(text);
let text2 = new PIXI.Text("Gushi Larvae", {
  fontFamily: "andale",
  fontSize: 24,
  fill: "white",
  align: "center",
});
overlay.addChild(text2);
let text3 = new PIXI.Text("Sushi/Snakes/Avacado/Eggs", {
  fontFamily: "andale",
  fontSize: 24,
  fill: "white",
  align: "center",
});
overlay.addChild(text3);

let text4 = new PIXI.Text("Purple DNA Jelly", {
  fontFamily: "andale",
  fontSize: 24,
  fill: "white",
  align: "center",
});
overlay.addChild(text4);
let text5 = new PIXI.Text("DNA/Cells/Jellyfish", {
  fontFamily: "andale",
  fontSize: 24,
  fill: "white",
  align: "center",
});
overlay.addChild(text5);
let text6 = new PIXI.Text("White Blazer Bug", {
  fontFamily: "andale",
  fontSize: 24,
  fill: "white",
  align: "center",
});
overlay.addChild(text6);
let text7 = new PIXI.Text("Skies/Cells/Ligtning", {
  fontFamily: "andale",
  fontSize: 24,
  fill: "white",
  align: "center",
});
overlay.addChild(text6);
let text7 = new PIXI.Text("Skies/Cells/Ligtning", {
  fontFamily: "andale",
  fontSize: 24,
  fill: "white",
  align: "center",
});
overlay.addChild(text7);
text.x = 100;
overlay.addChild(text);
container.addChild(overlay);
