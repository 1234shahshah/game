 var background 
 var monster 
 var god
var level=1
var main


function preload()
{
mon=loadImage("Images/s.png")
back=loadImage("Images/download.jpg")
go=loadImage("Images/god.png")
}

function setup()
{
  createCanvas(1600,800)

        background = createSprite(800,600)
        background.addImage("ba",back)
        background.scale=4
       

       

}

function draw()
{
  if (keyDown(UP_ARROW))
  {
    main.x+4
  }
  if (keyDown(DOWN_ARROW))
  {
    main.x-4
  }
  monster1()
  god1()
drawSprites();
}

function monster1()
{
  
if (frameCount%80===0)
{
  monster = createSprite(1600,random(1,800))
  monster.addImage("mu",mon)
  monster.scale=.1
  monster.velocityX=-level-5
}

}

function god1()
{
  if (frameCount%80===0)
  {
  god = createSprite(1600,random(1,800))
  god.addImage("g",go)
  god.scale=.3
  }
}
