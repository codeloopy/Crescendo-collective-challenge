export const getRecipes = async (url, htmlTemplate) => {
	try {
		const resp = await fetch(url);
		const data = await resp.json();
		return data;
	} catch (error) {
		console.error(error.message);
	}
};
