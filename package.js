class Log{
    constructer(x,y,height){
        this.body = Bodies.rectangle(x,y,20,height);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        Push();
        translate(this.body.position.x,this.body.position.y);
        rotate();
        Pop();
    }
}