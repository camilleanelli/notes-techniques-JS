console.log('it works');

// le bouton accepter apparait seulement si le scroll est fait entier
const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');

// terms.addEventListener('scroll', function (e) {
//   // pour savoir a combien de distance par rapport au top de l'élément scrollé
//   console.log(e.currentTarget.scrollTop);
//   console.log(e.currentTarget.scrollHeight);
// })

function obCallback(payload) {
  console.log(payload[0].intersectionRatio);
}

const ob = new IntersectionObserver(obCallback);
console.log(ob);

console.log(terms.lastElementChild);
ob.observe(watch);
