//Q#4-write a class to calculate the Uber price.
class Price_calc{
    constructor(distance){
    this.distance=distance
   }
   getPrice(){
    return (18*this.distance) 
   }
   }
   
   var uber_price = new Price_calc(30) //30km
   console.log("The travel amount is Rs.",uber_price.getPrice())