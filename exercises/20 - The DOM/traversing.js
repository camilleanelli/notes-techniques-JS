console.log('it works');

const cam = document.querySelector('.cam');

// les elements enfants
console.log(cam.children);

console.log(cam.childNodes);

console.log(cam.firstElementChild);
console.log(cam.lastElementChild);
console.log(cam.previousElementSibling);
console.log(cam.nextElementSibling);
console.log(cam.parentElement);

const p = document.createElement('p');

p.textContent = 'Hello I will be removed soon';

document.body.insertAdjacentElement('afterbegin', p);
// supprimer un element:
p.remove();

// il existe encore ne mémoire dans le js meme si on le supprime du DOM
console.log(p);
