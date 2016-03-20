function setup() {
  createCanvas(800,800);
 
}
var h=0;a=0;p=0;c=0;i=0;o=0;f=0;m=0;u=400;oop=1;cc=0;

function draw() {
  var x=0;y=0;m=0;z=0;b=500;
  background(229,20,76);
  mytext(30,10,h,p);
  character(mouseX,mouseY);
  u=bounce();
  everything(u);
  success();
}



function bounce()
{
   u=u+oop;
  if(u<200||u>600){
  oop=-oop;
  }
  return u;
}

function success()
{
  if(dist(0,mouseY,0,800)<10)
  { cc=1;
  }
  if(cc==1){
    stroke(255);
    background(229,20,76);
    textSize(100);
    textStyle(BOLD);
    text("Finish",width/2-150,height/2-150);
    mytext(width/2-50,height/2-70,h,p);
  }
}

function everything(u)
{  
  if(cc==0){
  z=1;x=0;
  for(i=0;i<60000;i=i+60)
  {
    o=0;
    f=0;
    barrier(u,u-20);
    die(u);
    score(u);
    
   u=u-x*z;
   z=-z;
   x=x+50;
   if(x>600||x<200)
   {
     z=-z;
   }

  }
  }

}


function mytext(q,h,w,l)
{
   stroke(255);
   noFill();
   textSize(32);
   text("DEATH:", h, q);
   text("SCORE:", h, q+50);
   text(w, h+150, q+random(-5,5));
   text(l, h+150, q+50+random(-5,5));
}

function barrier(a,b)
{     strokeWeight(4);
      stroke(255);
      
      rect(b-50+random(-2,2),-frameCount+800+m+40+random(-2,2),20+random(-2,2),20+random(-2,2));
      line(a,-frameCount+800+m+random(5),0,-frameCount+800+m+random(5));
      line(a+80,-frameCount+800+m+random(5),800,-frameCount+800+m+random(5));
      m=m+100;
      a=a+50;
      b=b-80*z;
    
     
      
}

function character(x,y)
{
    stroke(255);
    noFill();
    ellipse(x+random(-7,7),y-50,2+c,2+c);
    ellipse(x+random(-5,5),y-47,5+c,5+c);
    ellipse(x+random(-3,3),y-40,10+c,10+c);
    ellipse(x,y-10,40+c,40+c);
    ellipse(x,y-10,20+c,20+c);
    line(x,y,pmouseX,pmouseY); 
    stroke(0);
    fill(random(0,90));
    ellipse(x+random(-2,2),y-10+random(-2,2),15+c,15+c);
  
}
  


function die(a)
{

    d1=dist(0,mouseY,0,-frameCount+710+m);
    if(d1<=3&&(((mouseX)<a)||(mouseX)>a+80))
    {
      o=1;
    }
    if(o==1)
    {
    background(4,98,82);
    fill(0);
    ellipse(mouseX,mouseY-10,10,10);
    h=h+1;
    c=c-1;
    }
    
}
 


function score(a)
{
  if((mouseX<=b-30)&&(mouseX>=b-50)&&(mouseY>=(-frameCount+700+m+40))&&(mouseY<=(-frameCount+700+m+60)))
    {
      f=1;
    }
  if(f==1)
    {
      
      noStroke();
      fill(223,0,57);
      p=p+1;
      c=c+1;
    }
    
}
