
// selectionner les élément de la page : le bouton, le canvas etc
// on recupere le canvas
const canvas = document.querySelector('#etch-a-sketch');
// recuperer le contexte en 2d
const ctx = canvas.getContext('2d');


const shakeBtn = document.querySelector('.shake');
const MOVE_VALUE = 20;
// configurer pour pouvoir dessiner
// https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/lineJoin

// faire une variable appelée height et witdh basées sur les proprietes de canvas
const { height, width } = canvas;

// creer un point de départ random :
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// définir la forme de la ligne
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_VALUE;

// ajouter de la couleur :
let hue = 0;
// changer la couleur du stoke
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

// par ou commencer le dessin:
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// définir une fonction pour dessiner
function draw({ key }) {
  // incrémenter la variable hue pour que la couleur change
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log(key);
  ctx.beginPath();
  ctx.moveTo(x, y);

  switch (key) {
    case 'ArrowUp':
      y -= MOVE_VALUE;
      break;
    case 'ArrowRight':
      x += MOVE_VALUE;
      break;
    case 'ArrowDown':
      y += MOVE_VALUE;
      break;
    case 'ArrowLeft':
      x -= MOVE_VALUE;
      break;
    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}

// fonction pour déclencher la fonction en tapant les touches

function handleKey(event) {
  // pour retirer le comportement par défaut des touches fleches ( car on veut pas qu'elle soient utilisée pour bouger le fenetre)
  // sauf que tous les keydown sont desactivés
  // on va donc que désactiver les touches fleches :
  if (event.key.includes('Arrow')) {
    event.preventDefault();
    draw({ key: event.key });
  }
}

// définir une fonction shake pour effacer le canvas:
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  // on ecoute la l'event fin de l'animation :
  canvas.addEventListener('animationend', function () {
    console.log('Done');
    canvas.classList.remove('shake');
  },
    { once: true }
  );
}

// appeler la fonction sur window
window.addEventListener('keydown', handleKey);

// appeler la fonction shake sur le bouton shake:
shakeBtn.addEventListener('click', clearCanvas);
