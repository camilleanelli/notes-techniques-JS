console.log('it works');

const butts = document.querySelector('.butts');
const other = document.querySelector('.other');
function doSomething() {
  console.log('it got clicked');
};

// la fonction doit etre définie en dehors ou stockée dans un variable
butts.addEventListener('click', doSomething);
other.addEventListener('click', doSomething);

// pour supprimer un event la fonction doit être nommée et non une fonction anonyme directement passée en argument.
butts.removeEventListener('click', doSomething);

// ecouter plusieurs events

const buyButtons = document.querySelectorAll('button.buy');
console.log(buyButtons);

function buyItem() {
  console.log('buy item');
}

function handleButton(button) {
  console.log(button);
  button.addEventListener('click', buyItem);
}

// buyButtons.forEach(handleButton);

// un objet event : on peut utiliser e au lieu de event (par convention)
function checkEventButton(e) {
  console.log(e.target);
  console.log(e.currentTarget);
  // pour éviter aux autres comportements sur les e de se propager et d'interferer le comportement de cette fonction
  // e.stopPropagation();
  // avec cette fonction l'event listener sur window ne va pas se déclencher au click sur les boutons
}

buyButtons.forEach(function (button) {
  button.addEventListener('click', checkEventButton);
})

window.addEventListener('click', function (e) {
  console.log(e.target);
  console.log('the window!');
  // pour verifier si on a stopper la propagation de ce comportement quelque part
  console.log(e.bubbles);
  // vérifie quel event ? example click
  console.log(e.type);
  // on peut passer capture en option en 3eme argument
}, { capture: true }
)

const imageEl = document.querySelector('.image');

// this:

imageEl.addEventListener('mouseenter', function (e) {
  console.log(e.target);
  // this est l'élément a gauche du point en général sauf si la fonction devient fléchée
  // eviter d'utiliser this dnas un callback de eventlistener
  console.log(this);
})
