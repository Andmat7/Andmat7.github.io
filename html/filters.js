// const ringDisplacementSprite = PIXI.Sprite.from("displace.png");
// const ringDisplacementFilter = new PIXI.filters.DisplacementFilter(
//   ringDisplacementSprite
// );
// container.addChild(ringDisplacementSprite);

// var displacementSprite = new PIXI.Sprite.from("clouds.jpg");
// displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
// var displacementFilter = new PIXI.filters.DisplacementFilter(
//   displacementSprite
// );
// //container.addChild(displacementSprite);
// container.filters = [ringDisplacementFilter];
// ringDisplacementFilter.scale.x = 110;
// ringDisplacementFilter.scale.y = 110;
// ringDisplacementSprite.anchor.set(0.5);
// const ring = PIXI.Sprite.from("ring.png");
// ring.anchor.set(0.5);
// ring.visible = false;
// container.addChild(ring);
// container.on("mousemove", onPointerMove).on("touchmove", onPointerMove);
// function onPointerMove(eventData) {
//   ring.visible = true;

//   ringDisplacementSprite.position.set(
//     eventData.data.global.x - 25,
//     eventData.data.global.y
//   );
//   ring.position.copyFrom(ringDisplacementSprite.position);
// }
