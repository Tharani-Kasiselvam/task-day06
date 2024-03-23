//Q#1a)Write a constructor for the class Movie, which takes a String representing the title of the movie, 
    //a String representing the studio, and a String representing the rating as its arguments, 
    //and sets the respective class properties to these values.
//Q#1b) The constructor for the class Movie will set the class property rating to "PG" as default 
    //when no rating is provided.
class Movie{
    constructor(title,studio,rating="PG"){
      this.title = title
      this.studio = studio

      this.rating = rating
    }
//Q#1c) Write a method getPG, which takes an array of base type Movie as its argument, 
    //and returns a new array of only those movies in the input array with a rating of "PG". 
    //You may assume the input array is full of Movie instances. The returned array need not be full.
    getPG(mvArr){
      var tmpMvArr = mvArr.filter((movies)=>movies.rating=="PG")
      return(tmpMvArr)
      }
    }
  
  //Q#1d)Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
  //the studio “Eon Productions”, and the rating “PG­13”
  // var mv_new = [,,]
  var mv1 = new Movie("Casino Royale","Eon Productions","PG-13")
  var mv2 = new Movie("Movie#2","R5 Productions")
  var mv3 = new Movie("Padam#3","TMJ Productions")
  var mv4 = new Movie("Pictur#4","hello Productions","PG-10")

  // console.log(mv1,mv2,mv3,mv4)
  var movies = [mv1,mv2,mv3,mv4]
  console.log(getPG(movies))
