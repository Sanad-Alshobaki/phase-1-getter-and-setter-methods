// Add your Circle class here
const pi = Math.PI
class Circle {
    constructor(radius) {
        this.radius = radius
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }
    get diameter() {
        return this.radius * 2
    }

    set circumference(circumference) {
        this.radius = circumference / (pi * 2)
    }
    get circumference() {
        return pi * (this.radius * 2)
    }

    set area(area) {
        this.radius = Math.sqrt(area / pi)
    }
    get area() {
        return pi * (this.radius ** 2)
    }
}

const circle1 = new Circle(1); // radius = 1
console.log("Diameter = ", circle1.diameter) // radius * 2 ==> 2 
console.log("Circumference = ", circle1.circumference) //  π * diameter ==> 3.14 * 2
console.log("Area = ", circle1.area) // π * radius ** 2 ==> 3.14 * (1 * 1)  

console.log('%cindex.js line:35 Object', 'color: white; background-color: #097fcc;', Object);