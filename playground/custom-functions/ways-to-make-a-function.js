console.log('it is works');

// fonction anonyme :
// function(lastName) {
//   // do something with lastName
// }


// hello('fail'); Uncaught ReferenceError: Cannot access 'hello' before initialization
// fonction d'expression
// la fonction anonyme est stockée dans une variable et on ne peut pas l'appelée avant qu'elle soit définie
const hello = function (lastName) {
  console.log(`Hello my name is ${lastName}`);
};

// hoisted function :

hello2('you');
// on peut appeler une fonction 'hoisted' avant qu'elle soit définie
// js considère qu'elle est déclarée en haut du fichier avant tout le reste
function hello2(name) {
  console.log(`hey I am a hoisted function of ${name}`);
}

// arrow function : fonction fléchée
const inchToCm = function (inches) {
  // const cm = inches * 2.54;
  // return cm;
  // au lieu de la stocker dans une variable on peut return direct la valeur attendue
  return inches * 2.54;
}

// version classique avec la flèche :
const inchToCm2 = (inches) => {
  return inches * 2.54;
};

// version avec un implicite return: sur une ligne, pas de return et pas d'accolades
const inchToCm3 = (inches) => inches * 2.54

// function add(a, b = 3) {
//   const result = a + b;
//   return result;
// }

// version arrow :
const add = (a, b = 3) => { return a + b };

// autre exemple pour retourner un object js:

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first, last}`,
//     age: 0
//   }
//   returne baby;
// }
const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE : fonction d'expression immediatement lancée invoquée dans le navigateur
(function () {
  console.log('I am invoked now');
})();

// methods :
// fonction dans un objet

console.log('titi');
// log est une fonction
// console est un objet
//  on définie la method comme la propriété d'un objet:
const example = {
  name: 'hello',
  sayHi: function () {
    console.log('I am a method of example');
    return 'Hey !!';
  },
  // la manière la plus commune :
  yellHi() {
    return 'Yell hi !';
  }
}

// callbacks functions :

const button = document.querySelector('.clickme');

button.addEventListener('click', example.sayHi);

function doSomething() {
  console.log('heeere');
}

const button2 = document.querySelector('.dodo');
button2.addEventListener('click', doSomething);

// timer callback :
set(function () { console.log('time to eat') }, 1000);
