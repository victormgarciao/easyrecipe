import { getLinkElement } from '../services/link.service';
import { useIngredientsEffects } from './useIngredients.effects';
import { useRecipesEffects } from './useRecipes.effects';

function useHandleLink() {
    const { addIngredients } = useIngredientsEffects();
    const { addRecipe } = useRecipesEffects();

    return async function handleLink(link) {
        const linkElement = await getLinkElement(link);

        console.log(linkElement);
        const recipe = {
            href: link,
            title: linkElement.getElementsByTagName('h1')[0].textContent,
        }

        var all = linkElement.getElementsByTagName("*");
        var ingredients = [];
        for (var i = 0, max = all.length; i < max; i++) {       
            var textContent = all[i].textContent.toLowerCase();

            const { 
                nextElementSibling,
            } = all[i];

            const nextElementSiblingTagName = !!nextElementSibling ? nextElementSibling.tagName : null;
            const isIt = nextElementSiblingTagName === 'OL' || nextElementSiblingTagName === 'UL';
            const isMatch = textContent.indexOf('ingredient') !== -1 && isIt;

            if (isMatch) {
                const itemsList = nextElementSibling.querySelectorAll('li');
                itemsList.forEach((item) => {
                    ingredients.push({ recipeLink: recipe.href, ingredient: item.textContent, recipeTitle: recipe.title });
                })
                break;
            }
        }

        addIngredients(ingredients);
        addRecipe(recipe);
    };
}

export function useLinkEffects() {
    const handleLink = useHandleLink();
    return { handleLink };
}
