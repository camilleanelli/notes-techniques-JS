console.log('here');
const toto = 'camille';
const middle = 'coucou';
const end = 'anelli';

let ok = `don't go away`;
// le mieux est d'utiliser des `` backteeth

// interpoler
let age = 25;
let example = `hello my name is Namjoon and I am ${age}`;

console.log(example);

// chiffres en string
let calcul = '1' + '1';
console.log(calcul);

let other = "2" + 2;
console.log(other);

let numbers = `1` + `3`;
console.log(numbers);

// calculer
let realCalcul = 1 + 1;
console.log(realCalcul);

// numbers :
// + est utilisé pour la concatenation
// on peut utiliser des string pour faire des calcul sauf avec +

let addString = "1" + "5";
let multiple = "10" * "10";
// console.log(addString + multiple);

// NaN  : not a number
// Infinity : nombre trop grand

console.log(typeof 'toto');

// objects
const person = {
  first: 'hermione',
  last: 'granger'
};

console.log(person)

// indefined : une valeur qui est pas définie

console.log(person.toto);
//  toto est pas définie donc cela renvoie indefined

let dog;
console.log(dog);
// dog est pas définie donc cela renvoie indefined

// null: quelque chose qui a comme valeur null ( nothing )

let actor = {
  first: 'Namjoon',
  last: null
}
console.log(actor);

// boolean: true ou false
// === vérifie le type et la valeur
// == vérifie seulement la valeur : 100 == '100' est true
