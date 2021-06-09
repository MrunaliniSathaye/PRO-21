var canvas;
var music;
var block1 , block2 , block3 , block4

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(200,500,500,20)
    block1.shapeColor = color("red")

    block2 = createSprite(200,200,500,20)
    block2.shapeColor = color("blue")

    block3 = createSprite(20,200,20,500)
    block3.shapeColor = color("green")

    block4 = createSprite(600,200,20,500)
    block4.shapeColor = color("yellow")
    
    music.play()



    //create box sprite and give velocity
    box = createSprite(random(20,750),400,20,20)
    box.velocityX = 4
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    if(block1.isTouching(box)){
        box.shapeColor = rgb(255,0,0)
        box.velocityX = 0
        music.stop()
    }
     
    if(block2.isTouching(box)){
        box.shapeColor = rgb(0,0,255)
        box.velocityX = 0
        music.stop()
    }

    if(block3.isTouching(box)){
        box.shapeColor = rgb(0,255,0)
        box.velocityX = 0
        music.stop()
    }

    if(block4.isTouching(box)&& box.bounceOff(block4)){
        box.shapeColor = rgb(255,255,0)
        box.velocityX = 0
        music.stop()
    }

       drawSprites()

    //add condition to check if box touching surface and make it box
}
