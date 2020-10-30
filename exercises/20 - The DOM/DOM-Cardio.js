// Make a div


const div = document.createElement('div');
div.textContent = 'hello I am the div'
console.log(div);
// add a class of wrapper to it
div.classList.add('wrapper')
// put it into the body

document.body.appendChild(div);
// make an unordered list
const list = document.createElement('ul');
console.log(list);
// add three list items with the words "one, two, three" in them
const li1 = document.createElement('li');
li1.textContent = 'one';
const li2 = document.createElement('li');
li2.textContent = 'two';
const li3 = document.createElement('li');
li3.textContent = 'three';
list.insertAdjacentElement('beforeend', li3);
list.insertAdjacentElement('afterbegin', li1);
li1.after(li2);
// put that list into the above wrapper
div.appendChild(list);
// create an image
const myImage = document.createElement('img');

// set the source to an image
myImage.src = "https://source.unsplash.com/random/300x300";

// set the width to 250
myImage.width = 300;
// add a class of cute
myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy';
// Append that image to the wrapper
div.append(myImage);
console.log(myImage);
// with HTML string, make a div, with two paragraphs inside of it
const myHtml = `
  <div>
    <p> Lorem ipsum </p>
    <p class="warning"> Lorem ipsum </p>
  <div>
`
// put this div before the unordered list from above
const hello = document.createRange().createContextualFragment(myHtml);
list.before(hello);
// add a class to the second paragraph called warning
console.log(myHtml.childNodes);

// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
const generatePlayerCard = function (name, age, height) {
  return `
  <div class="playerCard">
   <h2>${name} — ${age}</h2>
   <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
   <button class="delete">Delete Player</button>
 </div>
 `
}

console.log(generatePlayerCard('tobby', 4, 65));
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const divCards = document.createElement('div');
divCards.classList.add('cards');
// make 4 player cards using generatePlayerCard
const player1 = generatePlayerCard('alban', 4, 4);
const player2 = generatePlayerCard('chouchou', 4, 6);
const player3 = generatePlayerCard('justin', 5, 4);
const player4 = generatePlayerCard('soso', 4, 4);
// append those cards to the div
divCards.insertAdjacentHTML('afterbegin', player1);
divCards.insertAdjacentHTML('beforeend', player2);
divCards.insertAdjacentHTML('beforeend', player3);
divCards.insertAdjacentHTML('beforeend', player4);


// put the div into the DOM just before the wrapper element
div.before(divCards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed


// select all the buttons!
const allButtons = document.querySelectorAll('.delete');
console.log(allButtons);

// make out delete function
function removeCard(event) {
  const cardToDelete = event.currentTarget;
  cardToDelete.parentElement.remove();
}

// loop over them and attach a listener
allButtons.forEach(button => button.addEventListener('click', removeCard));

