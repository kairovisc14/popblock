var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//criação das caixas
var caixa1 = createSprite(25, 75, 50, 50);
caixa1.shapeColor = "red";
var caixa2 = createSprite(75, 75, 50, 50);
caixa2.shapeColor = "blue";
var caixa3 = createSprite(125, 75, 50, 50);
caixa3.shapeColor = "red";
var caixa4 = createSprite(175, 75, 50, 50);
caixa4.shapeColor = "blue";
var caixa5 = createSprite(225, 75, 50, 50);
caixa5.shapeColor = "red";
var caixa6 = createSprite(275, 75, 50, 50);
caixa6.shapeColor = "blue";
var caixa7 = createSprite(325, 75, 50, 50);
caixa7.shapeColor = "red";
var caixa8 = createSprite(375, 75, 50, 50);
caixa8.shapeColor = "blue";
var caixa9 = createSprite(25, 125, 50, 50);
caixa9.shapeColor = "blue";
var caixa10 = createSprite(75, 125, 50, 50);
caixa10.shapeColor = "red";
var caixa11 = createSprite(125, 125, 50, 50);
caixa11.shapeColor = "blue";
var caixa12 = createSprite(175, 125, 50, 50);
caixa12.shapeColor = "red";
var caixa13 = createSprite(225, 125, 50, 50);
caixa13.shapeColor = "blue";
var caixa14 = createSprite(275, 125, 50, 50);
caixa14.shapeColor = "red";
var caixa15 = createSprite(325, 125, 50, 50);
caixa15.shapeColor = "blue";
var caixa16 = createSprite(375, 125, 50, 50);
caixa16.shapeColor = "red";

//variavel de pontuação
var pontuacao = 0;

//estado do jogo
var gameState = "serve";

//criação da bola
var bola = createSprite(200, 200, 20, 20);
bola.shapeColor = "white";

//criação da raquete
var raquete = createSprite(200, 390, 100, 20);
raquete.shapeColor = "white";

function draw() {
  background("black");
  
  //condicionais do gameState
  if (gameState == "serve")
  {
    //exibir texto de start
    textSize(25);
    fill("gray");
    text("Aperte enter para começar", 50, 300);
   
    //codigo para começar o jogo
    if (keyDown("ENTER")) {
      bola.velocity.x = 3;
      bola.velocity.y = 2;
      gameState = "play";
  }
  }
  if (gameState == "play")
  {
    //movimento da raquete
    if(keyDown("LEFT_ARROW") && raquete.x > 50){
      raquete.x = raquete.x - 5;
    }
    if(keyDown("RIGHT_ARROW") && raquete.x < 350){
      raquete.x = raquete.x + 5;
    }
  }
  
  //verificar se a bola saiu da tela
  if(bola.y >= 390){
    
    //destruição das bolas
    caixa1.destroy();
    caixa2.destroy();
    caixa3.destroy();
    caixa4.destroy();
    caixa5.destroy();
    caixa6.destroy();
    caixa7.destroy();
    caixa8.destroy();
    caixa9.destroy();
    caixa10.destroy();
    caixa11.destroy();
    caixa12.destroy();
    caixa13.destroy();
    caixa14.destroy();
    caixa15.destroy();
    caixa16.destroy();
    
    //mudança do gamestate
    gameState = "end";
  }
  
  if (gameState == "end")
  {
    //bola para
    bola.velocityX = 0;
    bola.velocityY = 0;
  
    //exibir final
    textSize(25);
    stroke("red");
    fill("red");
    text("fim de jogo", 140, 200);
  }
  if (pontuacao == 16){
    gameState = "vitoria";
  }
  
  if(gameState == "vitoria"){
    textSize(25);
    stroke("blue");
    fill("blue");
    text("parabéns, você ganhou", 80, 200);
    bola.velocityX = 0;
    bola.velocityY = 0;
  }
  //exibir pontuação
  textSize(20);
  textFont("Georgia");
  fill("white");
  stroke("white");
  text("pontuação: "+ pontuacao, 30, 30);
  

  //destruição das caixas e pontuação
  if(bola.isTouching(caixa1)){
    bola.bounceOff(caixa1);
    caixa1.destroy();
    pontuacao = pontuacao + 1;
  }
  if(bola.isTouching(caixa2)){
    bola.bounceOff(caixa2);
    caixa2.destroy();
    pontuacao = pontuacao + 1;
  }
  if(bola.isTouching(caixa3)){
    bola.bounceOff(caixa3);
    caixa3.destroy();
    pontuacao = pontuacao + 1;
  }
  if(bola.isTouching(caixa4)){
    bola.bounceOff(caixa4);
    caixa4.destroy();
    pontuacao = pontuacao + 1;
  }
  if(bola.isTouching(caixa5)){
    bola.bounceOff(caixa5);
    caixa5.destroy();
    pontuacao = pontuacao + 1;
  }
  if(bola.isTouching(caixa6)){
    bola.bounceOff(caixa6);
    caixa6.destroy();
    pontuacao = pontuacao + 1;
  }
  if(bola.isTouching(caixa7)){
    bola.bounceOff(caixa7);
    caixa7.destroy();
    pontuacao = pontuacao + 1;
  }
  if(bola.isTouching(caixa8)){
    bola.bounceOff(caixa8);
    caixa8.destroy();
    pontuacao = pontuacao + 1;
  }
  if(bola.isTouching(caixa9)){
    bola.bounceOff(caixa9);
    caixa9.destroy();
    pontuacao = pontuacao + 1;
  }
  if(bola.isTouching(caixa10)){
    bola.bounceOff(caixa10);
    caixa10.destroy();
    pontuacao = pontuacao + 1;
  }
  if(bola.isTouching(caixa11)){
    bola.bounceOff(caixa11);
    caixa11.destroy();
    pontuacao = pontuacao + 1;
  }
  if(bola.isTouching(caixa12)){
    bola.bounceOff(caixa12);
    caixa12.destroy();
    pontuacao = pontuacao + 1;
  }
  if(bola.isTouching(caixa13)){
    bola.bounceOff(caixa13);
    caixa13.destroy();
    pontuacao = pontuacao + 1;
  }
  if(bola.isTouching(caixa14)){
    bola.bounceOff(caixa14);
    caixa14.destroy();
    pontuacao = pontuacao + 1;
  }
  if(bola.isTouching(caixa15)){
    bola.bounceOff(caixa15);
    caixa15.destroy();
    pontuacao = pontuacao + 1;
  }
  if(bola.isTouching(caixa16)){
    bola.bounceOff(caixa16);
    caixa16.destroy();
    pontuacao = pontuacao + 1;
  }
  
  drawSprites();
  createEdgeSprites();
  bola.bounceOff(leftEdge);
  bola.bounceOff(rightEdge);
  bola.bounceOff(topEdge);
  bola.bounceOff(raquete);
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
