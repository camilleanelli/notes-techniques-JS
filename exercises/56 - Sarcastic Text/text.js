console.log('it works');

// le but est de pouvoir selection les options, et que le text change en fonction de l'option sélectionnée

// ici je recupere la zone de texte:
const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filtersInput = Array.from(document.querySelectorAll('[name="filter"]'));
const funkyLetters = {
  '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ'
};

// fonction qui transforme le texte:
function transformText(text) {
  const checkedFilter = filtersInput.find(input => input.checked).value;
  // on va mapper sur chaque lettre du texte
  const modifyText = Array.from(text).map(filters[checkedFilter]);
  result.textContent = modifyText.join('');
}

// on définie un objet pour définir les filtres
const filters = {

  // cela revient à fair sarcastic: function etc
  // ici on store des méthodes dans l'objet filters
  sarcastic(letter, index) {
    if (index % 2) {
      return letter.toUpperCase();
    }
    // si l'index est pair met en minuscules
    return letter.toLowerCase();
  },
  funky(letter) {
    let funk = funkyLetters[letter];
    if (funk) {
      return funk;
    }
    funk = funkyLetters[letter.toLowerCase()];
    if (funk) {
      return funk;
    }
    return letter;
  },
  unable(letter) {
    const random = Math.floor(Math.random() * 3);
    if (letter === ' ' && random === 2) {
      return '...';
    }
    return letter;
  },
}

textarea.addEventListener('input', e => transformText(e.target.value));

// ici on boucle sur chaque input filter pour re appliquer la fonction afin d'afficher le text transformé automatiquement
filtersInput.forEach(filter => filter.addEventListener('input', function () {
  transformText(textarea.value);
}))
