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
  if (keyDown("w"))
  {
    main.y=main.y-(score+10/5)
    
  }
  if (keyDown("s"))
  {
    main.y=main.y+(score+10/5)
  }
  if (keyDown("a"))
  {
    main.x=main.x-(score+10/5)
  }
  if (keyDown("d"))
  {
    main.x=main.x+(score+10/5)
  }
  for (var i=0;i<monsterGroup.length;i++)
  {
  
  if ( monsterGroup.get(i).isTouching(main))
  {
 monsterGroup.get(i).destroy()
   
    score=score+1
    }
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
  god.scale= score/50
  god.velocityX=-level-5
  godGroup.add(god)
  }

}
