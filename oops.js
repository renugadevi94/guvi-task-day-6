//GUVI TASK-6 
// a)  Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values. 
//*************************************************************************************

/* class movie {
    
    constructor(title, studio,rating){
    this.title = title
    this.studio = studio
    this.rating = rating
}
} */

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
 //****************************************************************************************/
 
 /* class movie {
    
    constructor(title, studio,rating){
    this.title = title
    this.studio = studio
    this.rating = "pg"
   }
  } 
   let movie1=new movie("Titanic","disney",)
   console.log(movie1)   */

 // d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
 //******************************************************************************* */
 
 /*  class movie {
    
    constructor(title, studio,rating){
    this.title = title
    this.studio = studio
    this.rating = rating
   }
  } 
   let movie2=new movie("casino Royale","Eon_Productions","PG13")
      console.log(movie2);   */
 
//__________________________________________________________________________
 // 3) Write a “person” class to hold all the details.
     
 
/*  class Name{

    constructor (firstName,lastName,age){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
    }

    
}
    let name1 = new Name("mahesh","balan",24)
    let name2 = new Name("renu","Devi",25)
    console.log(name1.firstName + " " + name1.lastName);

    
//___________________________________________________________________________
 
    4) write a class to calculate the uber price.

class uber{
    constructor(pickup,destination,km,basicpay,price){
    this.pickup=pickup;
    this.destination=destination;
    this.km=km;
    this.basicpay=40;
    
}
calc(){
return  this.km * this.basicpay;
}
}
let uber1=new uber('thambaram','egmore',50);
console.log(uber1);
console.log(uber1.calc())


       

//________________________________________________________________________________________
// 2)convert uml diagram to typescript class

/*  class Circle {
    constructor(...arr) {
        this.radius = arr[0];
        this.color = arr[1];

        // Below in this constructor, the logic is told in the class and not from the UML.

        this.arr = arr.filter((i) => i != undefined);

        if (this.arr.length == 0) {
            console.log("Empty")
        } else if (this.arr.length == 1) {
            console.log(`Radius : ${this.radius}`)
        } else {
            console.log(`Radius : ${this.radius}, Color : ${this.color}`)
        }
    }

    getRadius() {
        return this.radius;
    }

    getColor() {
        return this.color;
    }

    setRadius(rad) {
        this.radius = rad;
    }

    setColor(col) {
        this.color = col;
    }

    toString(){
        return `Radius : ${this.radius}, Color : ${this.color}`;
    }

    getArea(){
        return Math.PI * Math.pow(this.radius, this.radius);
    }

}

let a = new Circle()    
let b = new Circle(1.0) 
let c = new Circle(1.0, "red")  */
//__________________________________________________________________________
//Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full. 
 

  /* class movie {
    
    constructor(title,rating){
    this.title=title;
    this.rating=rating
        
   }
class movies {
    constructor(){
        this.movies=[]
    }
   
   getpg(title,rating){
    let p=new movie(title)
    this.movies.push(p)
    return p
   }
}
   
   let obj=new movies()
   obj.getpg("titanic")
   obj.getpg("PG")
   console.log(obj.getpg); */