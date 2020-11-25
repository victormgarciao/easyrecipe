import { values } from "mobx";
import { onPatch, types } from "mobx-state-tree";
import RecipeModel from "./models/recipe.model";


const MainStore = types
    .model('MainStore', {
        recipes: types.array(RecipeModel),
    })


    .actions((self) => {
        return {
            addRecipe(newRecipe) {
                self.recipes.push(newRecipe);
            },
        }
    })


    .views((self) => {
        return {
            get allIngredients() {
                return self.recipes
                    .reduce(
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
        }
    })
;


const store = MainStore.create();


onPatch(store, patch => {
    console.log('from store', patch);
    // localStorage.setItem('boxes', JSON.stringify(values(store.boxes)));
});


export default store;
