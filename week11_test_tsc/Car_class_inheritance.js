var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(name, type) {
        this.name = name;
        this.type = type;
    }
    Vehicle.prototype.getName = function () {
        return this.name;
    };
    Vehicle.prototype.getType = function () {
        return this.type;
    };
    return Vehicle;
}());
var car = new Vehicle('Tesla', 'car');
console.log(car);
console.log(car.getName()); // Tesla
console.log(car.getType()); // car
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(name) {
        return _super.call(this, name, 'car') || this;
    }
    Car.prototype.getName = function () {
        return 'It\'s a car:' + _super.prototype.getName.call(this);
    };
    return Car;
}(Vehicle));
var car2 = new Car('Tesla');
console.log(car2);
console.log(car2.getName()); // It's a car:Tesla
console.log(car2.getType()); // car
