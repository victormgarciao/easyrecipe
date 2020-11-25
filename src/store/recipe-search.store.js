import { onPatch, types } from 'mobx-state-tree';
import { getRecipeSearchActions } from './actions/recipe-search.actions';
import { pipe } from "ramda";
import { getAllH1FromElement } from '../services/dom.service';
import { takeFirst, getPropOrDefault, getTextContentProp } from "../utils/common.utils";


const DEFAULT_RECIPE_TITLE = 'Custom Recipe';


const RecipeSearchStore = types
    .model('RecipeSearchStore', {
        link: '',
    })


    .actions(getRecipeSearchActions)


    .views(() => {
        return {
            getTitleFromElement: pipe(
                getAllH1FromElement,
                takeFirst,
                getPropOrDefault('textContent', DEFAULT_RECIPE_TITLE),
            ),


            getIngredientFromElement(element) {
                return { ingredient: getTextContentProp(element) };
            },
        }
    })
;


const recipeSearchStore = RecipeSearchStore.create();


onPatch(recipeSearchStore, patch => {
    console.log('from recipe search store', patch);
});


export default recipeSearchStore;
