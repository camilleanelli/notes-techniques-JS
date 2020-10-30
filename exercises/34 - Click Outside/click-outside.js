const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButton(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  // recuperer le src de l'image :
  const imgSrc = card.querySelector('img').src;
  // on recuper la description dans data-description
  const desc = card.dataset.description
  const name = card.querySelector('h2').textContent;
  console.log(name);
  // console.log(card);
  // remplir la modale avec les nouvelles infos
  modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
    <p> ${desc} </p>
  `;
  // faire apparaitre la modale :
  modalOuter.classList.add('open');
};

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButton)
);

function removeModale() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function (event) {
  const isOutsideModal = !event.target.closest('.modal-inner');
  if (isOutsideModal) {
    modalOuter.classList.remove('open');
  }
})


