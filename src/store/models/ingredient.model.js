import { getParent, types } from "mobx-state-tree";


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


export default IngredientModel;