// Hoisting :
// lorsque des fonctions sont déclarées, le compileur de js va déplacer et lire toutes ces fonctions en haut du fichier
// je peux donc appeler ma fonction avant qu'elle soit définie

sayHi('James');

// myLife();
// Uncaught ReferenceError: Cannot access 'myLife' before initialization

function sayHi(name) {
  console.log(`hello ${name}`);
  addWord('love');
}
function addWord(name) {
  console.log(name);
}

// attention ! on parle que de fonctions déclarées et non stockées dans une variable
// celle ci ne pourra pas etre hoisted
const myLife = function () {
  console.log('it sucks');
}
