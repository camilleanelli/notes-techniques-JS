console.log('it works');

const cam = document.querySelector('.cam');

cam.addEventListener('click', function (event) {
  // cette fonction preventDefault va empecher le comportement normal ici qui est d'aller se connecter sur la page
  event.preventDefault();
  console.log(event.target);
  const shoulDoSomething = confirm('Do you want to confirm?');
  if (shoulDoSomething) {
    // ici location permet de choisir l'url de la page
    window.location = event.currentTarget.href;

  }
  // on peut aussi mettre ce prevet default dans la condition inverse
  if (!shoulDoSomething) {
    event.preventDefault()
  }
})

// recupere les valeurs du form

const signupForm = document.querySelector('[name="signup"]');

console.log(signupForm);

signupForm.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(event.currentTarget.name.value);
  console.log(event.currentTarget.email.value);
  console.log(event.currentTarget.agree);
  // pas nécessaire de passer par queryselector
  console.log(event.currentTarget.querySelector('[type="checkbox"]'));
})

// autres events détecter les valeurs
const signup = document.querySelector('[name="name"]');

signup.addEventListener('keyup', function (event) {
  console.log(event.currentTarget.value);
  console.log(event.type);
})

function logEvent(event) {
  console.log(event.currentTarget.value);
}

signup.addEventListener('keydown', logEvent);

// focus
// keyblur

// ajouter un role

const photo = document.querySelector('.photo');
function handlePhoto(event) {
  if (event.type === 'click' || event.key === 'Enter')
    console.log(event.key);
}

photo.addEventListener('click', handlePhoto);
photo.addEventListener('keyup', handlePhoto);
