//Q#2 - Class Circle and its corresponding methods
class Circle{
    constructor(radius,color){
     this.radius = radius
     this.color = color
    }
    getRadius(){
      return this.radius
    }
     setRadius(rad){
      this.radius = rad
    }
    getColor(){
     return this.color
    }
    setColor(col){
     this.color = col 
    }
    getArea(radius){
     return (Math.PI*radius*radius)
    }
    getCircumf(radius){
     return (2*Math.PI*radius)
    }
   }
   var cric = new Circle() //undefinied
   var circ1 = new Circle(5) //color will be undefined
   var circ2 = new Circle(5,"red")
   console.log(circ2.getRadius())
   cric.setRadius(10)
   cric.setColor("blue")
   console.log(cric.getRadius())
   console.log(cric.getColor())
   console.log("Area of a Circle for radius:",cric.getRadius()," is:",cric.getArea(cric.getRadius()))
   console.log("Area of a Circle for circumference:",circ2.getRadius(),"is:",circ2.getCircumf(circ2.getRadius()))