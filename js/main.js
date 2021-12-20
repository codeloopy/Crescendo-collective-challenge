const recipeDisplay = document.getElementById('recipes');

const htmlTemplate = recipe => {
	return `
        <div class="card">
            <img src="http://localhost:3001${recipe.images.medium}" alt="${
		recipe.title
	}" loading=lazy>
            <div class="card__timeToEatBadge">${
							recipe.prepTime + recipe.cookTime
						}<span><sub>Minutes</sub></span></div>
            <div class="text-content">
                <h2>${recipe.title}</h2>
                <p>${recipe.description}</p>
            </div>
            <button class="card_recipe-button" data-id=${
							recipe.uuid
						}>Get the Recipe!</button>
        </div>
    `;
};

const getRecipes = async () => {
	try {
		const resp = await fetch('http://localhost:3001/recipes');
		const data = await resp.json();

		const cards = data.map(dish => htmlTemplate(dish)).join('');
		return cards;
	} catch (error) {
		console.error(error.message);
	}
};

const renderRecipes = async cards => {
	recipeDisplay.innerHTML = await cards;
};

renderRecipes(getRecipes());
