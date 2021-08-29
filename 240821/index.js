
var Mouse = require('./Mouse');
var Cat = require('./Cat')

var jerry = new Mouse('yellow', 20);
var mickey = new Mouse('black', 55);

console.log(jerry);
console.log(mickey);

var tom = new Cat();
console.log(tom);

tom.eat(jerry);
tom.eat(mickey);

console.log(tom);