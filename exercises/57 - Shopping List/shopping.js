const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// un tableau pour recuperer les etats ( les données qui refletent l'état de l'application)

let items = [];

function handleSubmit(e) {
  e.preventDefault();
  console.log('submitted!');
  // on recupere item qui est le name de l'input name='item'
  const name = e.currentTarget.item.value;
  // il faut stocker les items et leurs ids
  // console.log(name);
  // si le name est vide il faut également ne pas submit
  if (!name) return;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };

  items.push(item);
  console.log(`there are ${items.length} items`);
  // puis on efface le contenu de l'input
  e.target.reset();
  displayItems();
  // il y a 4 autre choses a faire mais on ne veut pas tout lancer
  // on veut envoyer la data au serveur : mais ne pas le lancer dans cette fonction
  // ici je passe un nom d'event à la fonction CustomEvent: cela va creer un custom event

  // en gros si quelqu'un tient compte de cet evenement 'itemsUpdated' avec eventlistener, alors il sera pris en compte
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
  // ici lorsque la fonction est lancée rien ne se passe tant qu'on a pas écouté l'event 'itemsUpdated'
}

// fonction pour renvoyer les items
function displayItems() {
  console.log(items);
  const html = items.map(item =>
    `<li class="shopping-item">
      <input value="${item.id}" type="checkbox" ${item.complete ? 'checked' : ''}>
      <span class="itemName">${item.name}</span>
      <button value="${item.id}" aria-label="Remove ${item.name}">&times;</button>
      </li>`
  ).join("");
  list.innerHTML = html;

}

function mirrorToLocalStorage() {
  // localStorage permet de store de la donnée sur le navigateur
  // on a des objets dans items du coup on doit les convertir en string avec JSON
  localStorage.setItem('items', JSON.stringify(items));
  // console.info('miroir to local storage');
}

// on doit recuperer les objets du local storage du navigateur au moment du chargement de la page
function restoreFromLocalStorage() {
  // on recupere à l'aide de la cles items
  const restoredItems = JSON.parse(localStorage.getItem('items'));
  // items.push(restoredItems);
  if (restoredItems.length) {
    // on spread : avec le spread operateur on prend chaque élément du tableau et on le passe en argument à une fonction (qui peut prendre un nombre illimité d'args)
    items.push(...restoredItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

// on veut supprimer l'item si le bouton supprimé est cliqué
function deleteItem(id) {
  items = items.filter(item => item.id !== id);
  console.log(id);
  // ici je vais dispatcher le custon event qui est écouter si dessous pour à nouveau afficher la nouvelle version des items:
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

// il faut marquer l'item comme complété lorsqu'il est coché
function markAsComplete(id) {
  // on recupere l'item concerné
  let itemRef = items.find(item => item.id === id);
  // on veut changer la valeur 'complete' mais si elle est deja à true alors on veut la mettre à false
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
// on écoute l'event sur list mais on aurait pu l'appeler sur n'importe quel autre élément
list.addEventListener('itemsUpdated', displayItems);
// si j'ai une fonction qui est lancée et qui dispatche cet event, alors la fonction 'displayItems' sera déclenchée
// list.addEventListener('itemsUpdated', e => { console.log(e); })

list.addEventListener('itemsUpdated', mirrorToLocalStorage);

// on fait de la délégation d'event: on ecoute un évent sur la liste, mais si l'élément cliqué est button alors on reporte l'action sur celui ci
list.addEventListener('click', function (e) {
  // on vérifie si l'élément cliqué match avec le css selector
  if (e.target.matches('button')) {
    // on transforme la valeur en integer car la fonction s'attend à un id integer
    deleteItem(parseInt(e.target.value));
  };
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(parseInt(e.target.value));
  }
})
restoreFromLocalStorage();






