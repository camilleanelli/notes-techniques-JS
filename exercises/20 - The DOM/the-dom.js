// DOM = document object model
const p = document.querySelector('p');
const allDivs = document.querySelectorAll('div');
const items = document.querySelectorAll('.items');
const header = document.querySelector('h2');
console.log(p);

// renvoie une liste de Nodes
console.log(allDivs);
console.log(items);
console.log(header);

// on peut voir toutes les proprietes ( pour récuperer de la donnée ou la modifier)
console.dir(header);
header.textContent = 'I can do it';

console.log(header.innerText);

// items.insertAdjacentText('beforeend', 'hello');

// manipuler les class
const pic = document.querySelector('.pic');
console.log(pic.classList);


// pic.classList.add('round'); ajouter
// pic.classList.toggle('round'); declencher ou supprimer

// pic.remove('round'); supprimer la class

function toggleRound() {
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);

pic.alt = 'coucou';

// recuperer un attribut
console.log(pic.alt);

console.log(pic.width);

// set un attribut
pic.setAttribute('alt', 'hello');

// Pour ajouter ses propre attribut on utilise les metadata
// exemple: data-name

// ici on va récupérer notre propre attribut date-name
console.log(pic.dataset);

pic.addEventListener('click', function () {
  alert(`Welcome ${pic.dataset.name}`);
})

// pour modifier le data attributes
pic.dataset.name = 'toto';
console.log(pic.dataset);
