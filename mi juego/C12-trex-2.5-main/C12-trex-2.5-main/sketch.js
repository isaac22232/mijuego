var bosque
var fondo
var personaje,pc
var magma,pc2

function preload(){
 bosque = loadImage("bosque.jpg")
  personaje = loadAnimation("p1.png","p2.png","p3.png","p4.png")
  magma = loadAnimation("m1.png","m2.png","m3.png","m4.png")
}

function setup() {

  createCanvas(windowWidth,windowHeight)
  
  fondo = createSprite(250,150,windowWidth,windowHeight)
  fondo.addImage(bosque)
  fondo.scale = 1.4
  pc = createSprite(300,400,50,50)
  pc.addAnimation("movimiento", personaje)
  pc.scale = 2
  pc2 = createSprite(1500,400,50,50)
  pc2.addAnimation("movimiento2", magma)
  pc2.scale = 2
  pc2.visible=false
}

function draw() {

  background(180);
  fondo.velocityX=-3
  pc2.velocityX=-2
  if(fondo.x<-10){
    fondo.x=width/4
  }
  if(pc2.x<1300){
    pc2.visible=true
  }
  if(pc2.isTouching(pc)){
    pc2.velocityX=0
  }

  drawSprites();
}



