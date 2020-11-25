import { types } from "mobx-state-tree";
import IngredientModel from "./ingredient.model";


const RecipeModel = types
    .model('RecipeModel', {
        href: types.string,
        title: types.string,
        ingredientsList: types.array(IngredientModel),
    })
;


export default RecipeModel;