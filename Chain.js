class Chain{

    constructor(bodyA,bodyB){

        var options={

            bodyA:bird.body,
            bodyB:constrainedLog.body,
            sitffness:0.04,
            lenght:10
        }
    
       this.chain=Matter.Constraint.create(options)
        World.add(world,this.chain)

    }
    display(){

        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}