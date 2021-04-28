const displacementSprite = PIXI.Sprite.from("displace.png");
const displacementFilter = new PIXI.filters.DisplacementFilter(
  displacementSprite
);
app.stage.addChild(displacementSprite);
container.filters = [displacementFilter];
displacementFilter.scale.x = 110;
displacementFilter.scale.y = 110;
displacementSprite.anchor.set(0.5);
const ring = PIXI.Sprite.from("ring.png");
ring.anchor.set(0.5);
ring.visible = false;
app.stage.addChild(ring);
app.stage.on("mousemove", onPointerMove).on("touchmove", onPointerMove);
function onPointerMove(eventData) {
  ring.visible = true;

  displacementSprite.position.set(
    eventData.data.global.x - 25,
    eventData.data.global.y
  );
  ring.position.copyFrom(displacementSprite.position);
}