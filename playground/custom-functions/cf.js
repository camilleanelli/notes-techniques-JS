console.log('it works');

function calculateBill() {
  // this is function bill
  // la variable est block scoped car uniquement disponible dans la fonction
  const total = 100 * 3;
  console.log(total);
  // pour retourner la valeur on returb
  return total;
}

// console.log(total); cf.js: 9 Uncaught ReferenceError: total is not defined

// pour appeler la fonction :
calculateBill();

// pour rendre le disponible le resultat ce cette fonction on le stock dans une variable:
const myTotal = calculateBill();
console.log(`your total is ${myTotal}`);
console.log(`your total is ${calculateBill()}`);

// passer des parametres :
function calculateBill2(amount, taxRate) {
  const total2 = amount * (1 + taxRate);
  return total2;
};

const myTotal2 = calculateBill2(100, 0.20);
// si rien est passé en argument on obtient undefined ou NaN pour la fonction qui attend des numbers en argument

function helloYou(name) {
  console.log(`Hello ${name}`);
}

//  on peut passer des parametres ayant le meme nom dans différentes fonctions
function doctorize(name) {
  // do something with name
}

// avoir des valeurs par défaut par défaut dans les arguments
function calculateBill3(amount, taxRate = 0.20, numbers = 8) {
  const result = amount * (taxRate + numbers);
  console.log(`Hello you have to paye ${result}`);
};

// si on veut appeler la fonction et ne pas définir l'argument du milieu :
const myTotal3 = calculateBill3(3, undefined, 1);
