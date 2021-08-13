class Sand{
    constructor(x,y,radius){
        var options={
            restitution : 0.3,
            friction:5,
            density:1
        }
        this.body = Bodies.circle(x,y,(radius -20)/2,options);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("BLACK");
        fill("YELLOW");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}