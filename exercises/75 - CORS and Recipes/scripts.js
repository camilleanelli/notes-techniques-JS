// CORS
// CO = cross origin par exemple : camilleanelli.fr
// on ne peut pas communiquer entre plusieurs domaines sans les Cors policy du site qui possede la data
// ⚠ il manque parfois des cors policy sur le site de l'api pour pouvoire faire des requetes
// on ajoute un PROXY pour resoudre ce probleme
// localhost => proxy <= api-application
// R =
// S


const baseEndpoint = 'http://www.recipepuppy.com/api';
const form = document.querySelector('form.search');

async function fetchRecipes(query) {
  // on passe les query en argument et dans le endpoint
  // on passe un proxy dans notre cas
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const response = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await response.json();
  return data;
  // console.log(data);
}

async function handleSubmit(e) {
  e.preventDefault();
  const el = e.currentTarget;
  fetchAndDisplayRecipes(form.query.value);
}

async function fetchAndDisplayRecipes(query) {
  const recipes = await fetchRecipes(query);
  console.log(recipes);
  // ici .submit est l'attribut name du button
  form.submit.disabled = false;
  displayRecipes(recipes.results);
}

function displayRecipes(recipes) {
  const gridRecipes = document.querySelector('.recipes');

  console.log('creating html');
  console.log(recipes);
  const html = recipes.map(recipe =>
    `<div class="recipe">
      <h2>${recipe.title}</h2>
      <p>${recipe.ingredients}</p>
      ${recipe.thumbnail && `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`}s
    </div>
    `
  );
  gridRecipes.innerHTML = html.join('')
}

form.addEventListener('submit', handleSubmit);
fetchAndDisplayRecipes('pizza');
