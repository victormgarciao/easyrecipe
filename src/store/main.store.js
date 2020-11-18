import { values } from "mobx";
import { getParent, onPatch, types } from "mobx-state-tree";

const IngredientModel = types
    .model('IngredientModel', {
        ingredient: types.string,
    })

    .views((self) => {
        return {
            get recipeModel() {
                return getParent(self, 2);
            },

            get recipeLink() {
                return self.recipeModel.href;
            },

            get recipeTitle() {
                return self.recipeModel.title;
            },
        }
    });
;

const RecipeModel = types
    .model('RecipeModel', {
        href: types.string,
        title: types.string,
        ingredientsList: types.array(IngredientModel),
    })
;


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
            }
        }
    })
;

const store = MainStore.create();
// store.init();

onPatch(store, patch => {
    console.log('from store', patch);
    // localStorage.setItem('boxes', JSON.stringify(values(store.boxes)));
});

export default store;
