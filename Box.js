class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':0.7,
        'isStatic':false
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    if (this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(6)
      stroke("green")
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
      
    }
    else {
      
      World.remove(world,this.body)
      push()
      this.visibility=this.visibility-5;
      tint(255,this.visibility)
      rect(0, 0, this.width, this.height);
      pop()

    }  

  }
  scorepls(){
    console.log(this.visibility)
    if (this.visibility < 0 && this.visibility > -1005){
      score++;
      console.log(score)
    }
  }
};
