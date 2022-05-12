class Car{
    _name: string;
    constructor (name:string){
        this._name = name;
    }
    set name (name:string){
        this._name = name;
    }
    get name(){
        return this._name;
    }}

let car1 = new Car('Tesla');
console.log(car1);
console.log(car1.name);
car1.name = 'Honda';
console.log(car1.name);