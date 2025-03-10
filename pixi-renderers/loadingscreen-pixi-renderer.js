gdjs.LoadingScreenPixiRenderer = function(runtimeGamePixiRenderer, loadingScreenSetup) {
  this._pixiRenderer = runtimeGamePixiRenderer.getPIXIRenderer();
  if (!this._pixiRenderer) {
    // A PIXI Renderer can be missing during tests, when creating a runtime game
    // without a canvas.
    return;
  }

  this._loadingScreen = new PIXI.Container();

  this._progressText = new PIXI.Text(' ', {
    fontSize: '40px',
    fontFamily: 'Arial',
    fill: '#000000',
    align: 'center',
  });
  

  if (loadingScreenSetup && loadingScreenSetup.showGDevelopSplash) {
    this._madeWithText = new PIXI.Text('Made with', {
      fontSize: '30px',
      fontFamily: 'Arial',
      fill: '#FFFFFF',
      align: 'center',
    });
    this._madeWithText.position.y = this._pixiRenderer.height / 2 - 130;
    this._websiteText = new PIXI.Text('gdevelop-app.com', {
      fontSize: '30px',
      fontFamily: 'Arial',
      fill: '#FFFFFF',
      align: 'center',
    });
    this._websiteText.position.y = this._pixiRenderer.height / 2 + 100;

    this._splashImage = new PIXI.Sprite.fromImage("./loading_background.jpg");
    this._splashImage.position.x = 0;
    this._splashImage.position.y = 0;
    this._splashImage.anchor.x = 0;
    this._splashImage.anchor.y = 0;
    this._splashImage.height = this._pixiRenderer.height*1.05;
    this._splashImage.width = this._pixiRenderer.width*1.05;
    this._loadingScreen.addChild(this._splashImage);
    this._loadingScreen.addChild(this._madeWithText);
    this._loadingScreen.addChild(this._websiteText);
    this._loadingScreen.addChild(this._progressText);
  }
};

gdjs.LoadingScreenRenderer = gdjs.LoadingScreenPixiRenderer; //Register the class to let the engine use it.

gdjs.LoadingScreenPixiRenderer.prototype.render = function(percent) {
  if (!this._pixiRenderer) {
    return;
  }

  var screenBorder = 10;

  if (this._madeWithText) {
    this._madeWithText.position.x =
      this._pixiRenderer.width / 2 - this._madeWithText.width / 2;
    this._madeWithText.position.y =
      this._pixiRenderer.height / 2 -
      this._splashImage.height / 2 -
      this._madeWithText.height -
      20;
  }
  if (this._websiteText) {
    this._websiteText.position.x =
      this._pixiRenderer.width - this._websiteText.width - screenBorder;
    this._websiteText.position.y =
      this._pixiRenderer.height - this._websiteText.height - screenBorder;
  }

  this._progressText.text = "게임준비중..."+ percent + '%';
  this._progressText.position.x = this._pixiRenderer.width/2;
  this._progressText.position.y =
    (this._pixiRenderer.height - this._progressText.height)/2;

  this._pixiRenderer.render(this._loadingScreen);
};

gdjs.LoadingScreenPixiRenderer.prototype.unload = function() {
  // Nothing to do
};
