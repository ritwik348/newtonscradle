class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 100
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            line(pointB.x,pointB.y,pointA.x,pointA.y)
        
    }

    
}