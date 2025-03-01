class ManufactureCar {
    constructor(Name,year){
        this.Name = Name
        this.year = year
    }

    date(){
        const date = new Date()
        return date.getFullYear() - this.year
    }

    carInfo(){
        console.log(`Brand ${this.Name} model ${this.year} `);
    }


}

const modelOne = new ManufactureCar('BMW',2020);
const year = modelOne.date()
console.log(year)
modelOne.carInfo()

// Expression; the class is anonymous but assigned to a variable
   
const Circle = class {
    constructor(radius,color){
               this.radius = radius;
               this.color = color;
               this.pi = 3.14;
    }
    
    findArea(){
            return this.radius * this.radius * this.pi;
    }
    
    visualRepresent(){
                console.log(`this circle is ${this.color} in color`)
    }
    
}

const circle = new Circle(5)
const area = circle.findArea()
console.log(area)
circle.visualRepresent()



