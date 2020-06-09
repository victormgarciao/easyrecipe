import { getIngredientsAndRecipeFromLink } from '../services/data.service';
import { useIngredientsEffects } from './useIngredients.effects';
import { useRecipesEffects } from './useRecipes.effects';

function useHandleDataFromLink() {
    const { addIngredients } = useIngredientsEffects();
    const { addRecipe } = useRecipesEffects();

    return function handleDataFromLink(link) {
        getIngredientsAndRecipeFromLink({
            link,
            addIngredients,
            addRecipe,
        });
    };
}

export function useLinkEffects() {
    const handleDataFromLink = useHandleDataFromLink();
    return { handleDataFromLink };
}
