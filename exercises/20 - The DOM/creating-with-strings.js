console.log('it works');

const item = document.querySelector('.item');
const image = document.createElement('img');
const src = 'https://source.unsplash.com/random/300x300';
const word = 'puppy';

const myHtml = `
<div class="wrapper>
  <h2> Cute ${word} </h2>
  <img src="${src}" alt="${word}"/>
</div>
 `;

const myFragment = document.createRange().createContextualFragment(myHtml);
console.log(myFragment);

document.body.appendChild(myFragment);
