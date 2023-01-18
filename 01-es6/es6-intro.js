/* 
ES6
*/

let
const
array destructing
rest operator (array)
spread operator (array)
object destructing
rest operator(object)
spread operator(object)
default arguments
arrow functions
/*
//function statement
function add(x,y){
return x + y;
}

//function expression
var add = function(x,y){
return x + y;
}

var add = (x,y) => {
return x + y;
}
*/
var add = (x, y) => x + y;

template strings
classes

class Employee {
    id = 0;
    name = '';
    salary = 0;

    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    format() {
        return `id=${this.id}, name=${this.name}, salary = ${this.salary}`
    }
}

CLASS INHERITANCE
class FullTimeEmployee extends Employee {
    benefits = '';
    constructor(id, name, salary, benefits) {
        super(id, name, salary);
        this.benefits = benefits;
    }
    format() {
        return `${super.format()}, benefits=${this.benefits}`
    }
}

ES6 Modules
    - Anything defined in a file is considered "Private"
    - Any public entity has to be explicitly "exported"
    - Any dependency from another file has to explicitly "imported"

https://es6-features.org
https://bit.ly/javascript-training-videos