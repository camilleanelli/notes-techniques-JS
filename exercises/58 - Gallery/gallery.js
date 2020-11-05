function Gallery(gallery) {
  console.log(gallery);
  if (!gallery) {
    // renvoie une error si pas de selecteyr
    throw new Error('no galley passed');
  }
  // select les images
  const images = gallery.querySelectorAll('img');
  const modal = document.querySelector('.modal');
  const prev = modal.querySelector('.prev');
  const next = modal.querySelector('.next');
  let currentImage;

  console.log(images);

  function openModal() {
    if (modal.matches('.open')) {
      // on s'assure que la modal est pas deja retournée dans ce cas on ne fait rien
      console.log('modal already opened');
      return;
    }
    modal.classList.add('open');
    // ces event listeners doivent etre déclenchés que lorsque la modale est ouverte
    window.addEventListener('keyup', handleKeyUp);
    next.addEventListener('click', handleNextElement);
    prev.addEventListener('click', showPreviousImage);
  }

  function closeModal() {
    modal.classList.remove('open');
    // ces event ne doivent pas exister lorsque la modale est fermée
    window.removeEventListener('keyup', handleKeyUp);
    next.removeEventListener('click', handleNextElement);
    prev.removeEventListener('click', showPreviousImage);

  }

  // on veut déclencher la fonction closeModal, au click sur la page
  function handleClickOutside(e) {
    //  l'élément modal prend toute la page donc si on clique sur l'élément currentTarget alors on ferme la modale
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  // on veut fermer la modale si on 'escape', et utiliser les touches fléchées pour previous et next
  function handleKeyUp(e) {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') showPreviousImage();
    if (e.key === 'ArrowRight') handleNextElement();
  }

  function showImage(el) {
    if (!el) {
      console.log('no images');
      return;
    }
    console.log(el);

    //je change les attributs de la modale pour avoir la bonne image
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }

  function handleNextElement(e) {
    // on affiche alors l'élément suivant, ou le premier de la gallery si pas d'élément suivant
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPreviousImage(e) {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  // on veut que la modale apparaisse au clique pour chaque image
  images.forEach(image => {
    image.addEventListener('click', e => showImage(e.currentTarget))
  });

  // on veut que l'image apparaisse aussi avec la touche enter du clavier
  images.forEach(image => {
    image.addEventListener('keyup', e => {
      if (e.key === "Enter") showImage(image);
    })
  });

  // on veut que la modale disparaisse au click
  modal.addEventListener('click', handleClickOutside);
}

// on appel le constructeur Gallery
Gallery(document.querySelector('.gallery1'));
Gallery(document.querySelector('.gallery2'));


