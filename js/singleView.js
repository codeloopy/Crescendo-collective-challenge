import { getRecipes } from './getRecipes.js';

const singleViewElement = document.querySelector('#singleRecipe');
const url = 'http://localhost:3001/recipes';
const allRecipes = await getRecipes(url);

const singleRecipe = await allRecipes.filter(
	recipe => recipe.uuid === singleViewElement.dataset.id
);
