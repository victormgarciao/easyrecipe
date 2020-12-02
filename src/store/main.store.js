import { values } from "mobx";
import { onPatch, types } from "mobx-state-tree";
import { cond, equals } from "ramda";
import { ifNot } from "../utils/common.utils";
import RecipeModel from "./models/recipe.model";


const MainStore = types
    .model('MainStore', {
        recipes: types.array(RecipeModel),
    })


    .actions((self) => {
        return {
            addRecipe(newRecipe) {
                cond([
                    [ self.isRecipeIncluded, self.sendRepeatedRecipeMessage  ],
                    [ ifNot, self.pushRecipe ]
                ])(newRecipe);
            },


            sendRepeatedRecipeMessage() { alert('THAT RECIPE IS ALREADY IN YOUR LIST') }, // THIS SHOULD BE TO AN OMS SYSTEM


            pushRecipe(newRecipe) { self.recipes.push(newRecipe) },
        }
    })


    .views((self) => {
        return {
            get allIngredients() {
                return self.recipes.reduce(
                    (allIngredientsList, recipe) => {
                        return [
                            ...allIngredientsList,
                            ...recipe.ingredientsList
                        ]},
                    []
                );
            },


            get recipesList() {
                return values(self.recipes);
            },


            isRecipeIncluded(newRecipe) {
                function isHrefFound(recipe) { return equals(recipe.href, newRecipe.href) };
                return self.recipesList.find(isHrefFound);
            },
        }
    })
;


const store = MainStore.create();


onPatch(store, patch => {
    console.log('from store', patch);
    // localStorage.setItem('boxes', JSON.stringify(values(store.boxes)));
});


export default store;
