import { getRecipes } from './getRecipes.js';

const singleViewElement = document.querySelector('#single-recipe');
const url = 'http://localhost:3001/recipes';
const allRecipes = await getRecipes(url);

const htmlTemplate = dish => {
	const ingredients = dish.ingredients
		.map(el => {
			return `<li>${el.amount} ${el.measurement} ${el.name}</li>`;
		})
		.join('');

	const directions = dish.directions
		.map(el => {
			return `<li>${el.instructions}</li>`;
		})
		.join('');

	return `
    <div class="single-recipe-card">
        <div class="single-recipe-card__header">
            <img
                src="http://localhost:3001${dish.images.full}"
                alt="${dish.title}"
                loading="lazy"
                class="single-recipe-card__image"
            />
            <div class="single-recipe-card__icons">
                <div class="single-recipe-card__side">
                    <div class="single-recipe-card__cooking-info">
                        <div id="preptime">
                            <span class="material-icons">schedule</span> ${dish.prepTime} Minutes
                        </div>
                        <div id="cooktime">
                            <span class="material-icons">schedule</span> ${dish.cookTime} Minutes
                        </div>
                        <div id="cooktime">
                            <span class="material-icons">people</span> Serves ${dish.servings}
                        </div>
                    </div>
                    <div class="single-recipe-card__ingredients">
                        <ul>
                        ${ingredients}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="single-recipe-card__body">
            <div class="single-recipe-card__titles">
                <h1 class="singleRecipe-card__title">${dish.title}</h1>
                <p class="singleRecipe-card__description">${dish.description}</p>
            </div>
            <div class="single-recipe-card__ingredients">
                <ol>${directions}</ol>
            </div>
        </div>
    </div>
    `;
};

const singleRecipe = await allRecipes.filter(
	recipe => recipe.uuid === singleViewElement.dataset.id
);

const renderRecipes = async data => {
	const cards = data.map(dish => htmlTemplate(dish)).join('');
	singleViewElement.innerHTML = await cards;
};

renderRecipes(singleRecipe);

console.log(singleRecipe);
