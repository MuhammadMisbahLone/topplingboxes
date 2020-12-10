class Ground{
constructor() {
 var goptions = {isStatic:true};
 this.body = Bodies.rectangle(200,380,400,40,goptions);
 World.add(world,this.body);
}
display() {
 rectMode(CENTER);
 rect(this.body.position.x,this.body.position.y,400,40);
}
}