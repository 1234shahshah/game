 var background 
 var monster 
 var god
var level=1
var main
var vis = 255
var score = 0


function preload()
{
mon=loadImage("Images/s.png")
back=loadImage("Images/download.jpg")
go=loadImage("Images/god.png")
mai=loadImage("images/main.png")
}

function setup()
{
  createCanvas(1600,800)
         
        background = createSprite(800,600)
        background.addImage("ba",back)
        background.scale=4
   
        main = createSprite(50,100)

       main.addImage("m",mai)
       main.scale=.2
        
       godGroup=new Group()
       monsterGroup=new Group()

       

}

function draw()
{

 text(score,100,100)
  if (keyDown(UP_ARROW))
  {
    main.y=main.y-4
  }
  if (keyDown(DOWN_ARROW))
  {
    main.y=main.y+4
  }
  if (keyDown(LEFT_ARROW))
  {
    main.x=main.x-4
  }
  if (keyDown(RIGHT_ARROW))
  {
    main.x=main.x+4
  }
  if (keyDown("e") && monsterGroup.isTouching(main))
  {

    monster.tint = "rgba(255, 255, 255, 0)";
    monsterGroup.destroyEach()
    score=score+1
  }

  if (godGroup.isTouching(main))
  {
    main.velocityX=god.velocityX
  } else 
{
main.velocityX=0
} 

 monster1()
  god1()
drawSprites();
textSize(50)
fill("red")
text("Score:" + score,100,100)
}

function monster1()
{
  
if (frameCount%60===0)
{
  monster = createSprite(1600,random(1,800))
  monster.addImage("mu",mon)
  monster.scale=.1
  monster.velocityX=-level-5

  monsterGroup.add(monster)
}

}

function god1()
{
  if (frameCount%160===0)
  {
  god = createSprite(1600,random(1,800))
  god.addImage("g",go)
  god.scale=.4
  god.velocityX=-level-5
  godGroup.add(god)
  }

}
