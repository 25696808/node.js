class Vehicle{
    name:string;
    type:any;
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
    getName(){
        return this.name;
    }
    getType(){
        return this.type;
    }
}
let car = new Vehicle('Tesla','car');
console.log(car);
console.log(car.getName()); // Tesla
console.log(car.getType()); // car

class Car extends Vehicle {
    constructor(name){
        super(name,'car');
    }
    getName(){
        return 'It\'s a car:'+ super.getName();
    }
}
let car2 = new Car('Tesla');
console.log(car2);
console.log(car2.getName()); // It's a car:Tesla
console.log(car2.getType()); // car