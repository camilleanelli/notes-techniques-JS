// global scope : disponibles globalement

var age = 200;
// la variable est disponible sur l'objet window

function hello() {
  console.log('say hi');
}
// la fonction hello est disponible egalement sur window

// sauf pour ces 2 variables let et const ne sont pas disponible sur window
let nam = 'Ron';
const film = 'Harry Potter';

// function scope : seulement disponible dans une fonction

const why = 'because I am too shy';
function sayFuck() {
  let say = 'fuck';
  console.log(say);
  // la variable est disponible uniquement ici
  console.log(why);
  // la variable définie en dehors de la fonction est bien appelée, js va d'abord la rechercher dans la fonction si elle définie puis dans les autres scopes
}

sayFuck();
// console.log(say);
// scope.js:21 Uncaught ReferenceError: say is not defined

// block scoped variables
if (1 === 1) {
  const color = 'blue';
  let foo = 'foo';
  // var n'est pas block scoped
  var available = true;
}

// console.log(color);
// // la variable ne peut pas etre appelée en dehors du bloque dans lequel elle a été définie
// console.log(foo);
// idem

console.log(available);
// var est disponible est dehors du bloque

function other(name) {
  let cool = true;
  var hello = 'cool';
  if (name === 'camille') {
    console.log(cool);
    // cool est accessible car définie dans la fonction est on est dans la fonction
    let toto = 'tata';
    console.log(hello);
    // cette variable est function scoped dispo en dehors de la fonction dans laquelle elle est définie
  }
  // console.log(toto);
  // scope.js:53 Uncaught ReferenceError: toto is not defined
  // la variable est block scoped donc dispo que dans le block
};

other('camille');
// var est une variable globale , il est important de ne pas trop l'utiliser dans une boucle
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// parce que var est global et donc disponible en dehors de la boucle ce qui peut porter à confusion
// i n'est pas censé etre dispo ailleurs dans notre cas
console.log(i);


const name = 'Bobby';

function logCat2() {
  console.log(name);
}

// variable en argument: ce qui est passé en argument est considéré comme une variable locale donc utilisée en priorité
function logCat(name) {
  console.log(name);
}

// undefined parce qu'il s'attend à ce que name soit définie et const est ignoré
logCat();

logCat('Norbert');

function go() {
  // celle ci ne sera jamais renvoyée dans notre cas
  const name = 'coucou';

  logCat('chat');

  // c'est donc la premiere const que la fonction a appelé qui sera renvoyée
  logCat2();
}

go();
// chat
// bobby
// renvoie bien chat et non la constante définie au dessus

// function scoping

// idem pour les fonction définies dans un fonction, elles ne seront pas disponibles en dehors de leur scope
