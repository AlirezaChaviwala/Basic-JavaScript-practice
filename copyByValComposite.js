/* How do you copy by value a composite data type? */

let arrayOg = [1, 2, 3, 4, 5];
let arrayCopy = arrayOg.slice();
arrayCopy[5] = 6;

console.log(arrayOg);
console.log(arrayCopy);

let user = {
    name: "Ali",
    age: 24,
    posn: "sniper"
};

let copy = Object.assign({}, user);
console.log(copy);