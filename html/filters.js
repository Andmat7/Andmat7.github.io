var gui = new dat.GUI({
    //height : 5 * 32 - 1,
    //width : 350
  });
  var displacementTexture = PIXI.Texture.fromImage("displacement_map.jpg");
  var displacementFilter = new PIXI.DisplacementFilter(displacementTexture);
  
  var displacementFolder = gui.addFolder("Displacement");
  var filtersSwitchs = [
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  displacementFolder.add(filtersSwitchs, "0").name("apply");
  displacementFolder.add(displacementFilter.scale, "x", 1, 200).name("scaleX");
  displacementFolder.add(displacementFilter.scale, "y", 1, 200).name("scaleY");
  
  var blurFilter = new PIXI.BlurFilter();
  
  var blurFolder = gui.addFolder("Blur");
  blurFolder.add(filtersSwitchs, "1").name("apply");
  blurFolder.add(blurFilter, "blurX", 0, 32).name("blurX");
  blurFolder.add(blurFilter, "blurY", 0, 32).name("blurY");
  
  ////
  
  var pixelateFilter = new PIXI.PixelateFilter();
  
  var pixelateFolder = gui.addFolder("Pixelate");
  pixelateFolder.add(filtersSwitchs, "2").name("apply");
  pixelateFolder.add(pixelateFilter.size, "x", 1, 32).name("PixelSizeX");
  pixelateFolder.add(pixelateFilter.size, "y", 1, 32).name("PixelSizeY");
  
  ////
  
  var invertFilter = new PIXI.InvertFilter();
  
  var invertFolder = gui.addFolder("Invert");
  invertFolder.add(filtersSwitchs, "3").name("apply");
  invertFolder.add(invertFilter, "invert", 0, 1).name("Invert");
  
  ////
  
  var grayFilter = new PIXI.GrayFilter();
  
  var grayFolder = gui.addFolder("Gray");
  grayFolder.add(filtersSwitchs, "4").name("apply");
  grayFolder.add(grayFilter, "gray", 0, 1).name("Gray");
  
  ////
  
  var sepiaFilter = new PIXI.SepiaFilter();
  
  var sepiaFolder = gui.addFolder("Sepia");
  sepiaFolder.add(filtersSwitchs, "5").name("apply");
  sepiaFolder.add(sepiaFilter, "sepia", 0, 1).name("Sepia");
  
  ////
  
  var twistFilter = new PIXI.TwistFilter();
  
  var twistFolder = gui.addFolder("Twist");
  twistFolder.add(filtersSwitchs, "6").name("apply");
  twistFolder.add(twistFilter, "angle", 0, 10).name("Angle");
  twistFolder.add(twistFilter, "radius", 0, 1).name("Radius");
  
  twistFolder.add(twistFilter.offset, "x", 0, 1).name("offset.x");
  twistFolder.add(twistFilter.offset, "y", 0, 1).name("offset.y");
  
  ////
  
  var dotScreenFilter = new PIXI.DotScreenFilter();
  
  var dotScreenFolder = gui.addFolder("DotScreen");
  dotScreenFolder.add(filtersSwitchs, "7").name("apply");
  dotScreenFolder.add(dotScreenFilter, "angle", 0, 10);
  dotScreenFolder.add(dotScreenFilter, "scale", 0, 1);
  
  ////
  
  var colorStepFilter = new PIXI.ColorStepFilter();
  
  var colorStepFolder = gui.addFolder("ColorStep");
  colorStepFolder.add(filtersSwitchs, "8").name("apply");
  
  colorStepFolder.add(colorStepFilter, "step", 1, 100);
  colorStepFolder.add(colorStepFilter, "step", 1, 100);
  
  ////
  
  var crossHatchFilter = new PIXI.CrossHatchFilter();
  
  var crossHatchFolder = gui.addFolder("CrossHatch");
  crossHatchFolder.add(filtersSwitchs, "9").name("apply");
  
  //	var filterCollection = [blurFilter, pixelateFilter, invertFilter, grayFilter, sepiaFilter, twistFilter, dotScreenFilter, //colorStepFilter, crossHatchFilter];
  
  var rgbSplitterFilter = new PIXI.RGBSplitFilter();
  
  var rgbSplitFolder = gui.addFolder("RGB Splitter");
  rgbSplitFolder.add(filtersSwitchs, "10").name("apply");
  
  var filterCollection = [
    displacementFilter,
    blurFilter,
    pixelateFilter,
    invertFilter,
    grayFilter,
    sepiaFilter,
    twistFilter,
    dotScreenFilter,
    colorStepFilter,
    crossHatchFilter,
    rgbSplitterFilter,
  ];
  function addFilters() {
    var filtersToApply = [];
    for (var i = 0; i < filterCollection.length; i++) {
      if (filtersSwitchs[i]) filtersToApply.push(filterCollection[i]);
    }
  
    return filtersToApply.length > 0 ? filtersToApply : null;
  }