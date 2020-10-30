console.log('it works');

const myParagraph = document.createElement('p');

myParagraph.textContent = 'coucou c moi';
myParagraph.classList.add('special');
console.log(myParagraph);

const img = document.createElement('img');
img.src = "https://source.unsplash.com/random/300x300";
img.alt = 'new picture';


// integrer l'élément dans le dom :

document.body.appendChild(myParagraph);
// ajoute un node ou un élément enfant tout à la fin

document.body.appendChild(img);
// cela modifie le DOM on appel cela le reflow ( j'ai besoin de repaindre la page ')

// ajouter un élément en haut de la page :

const heading = document.createElement('h2');
heading.textContent = 'I am a heading';

const myDiv = document.createElement('div');
myDiv.textContent = 'I am a div';

document.body.insertAdjacentElement('afterbegin', myDiv);

myDiv.insertAdjacentElement('afterend', heading);

// construire une liste:
const list = document.createElement('ul');
const li = document.createElement('li');

li.textContent = 'three';
li5 = document.createElement('li');
li5.textContent = 'five';

document.body.insertAdjacentElement('afterbegin', list);
list.appendChild(li);
list.append(li5);

// insérer le 2 avant le 3:
li2 = document.createElement('li');
li2.textContent = 'two';

li.insertAdjacentElement('beforebegin', li2);

