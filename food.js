class food{
    constructor() {
        var foodStock
        var lastFed
        }
        this.body = Bodies.rect(x, y, width,height, options);
        this.height = height;
        this.x=x;
        this.y=y;
        this.width=width;
        this.image=loadImage("Milk.png")
        World.add(world, this.body);
      }
      display(){
        var x=80, y=100;

        imageMode(CENTER);
        image(his.image,720,220,70,70);

        if(this.foodStock!=0){
          for(var i=0;<this.foodStock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
          }
        }
      } 