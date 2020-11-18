import { getIngredientsAndRecipeFromLink } from '../services/data.service';
import { cond, propSatisfies, isNil } from 'ramda';
import { ifNot } from '../utils/common.utils';
import {  INGREDIENTS_NOT_FOUND } from '../containers/templates/ModalQueueTemplate/modal-queue.constants';
import { types } from 'mobx-state-tree';

const RecipeSearchStore = types
    .model('RecipeSearchStore', {
        link: '',
    })

    .actions((self) => {
        return {
            setLink(link) { self.link = link; },

            clearLink() { self.link = ''; },
            
            setLinkFromEvent(event) {
                const link = event.target.value
                self.setLink(link);
            },

            handleLink({ recipe, addRecipe }) {
                addRecipe(recipe);
                self.clearLink()
            },

            handleError({ link, addModal }) {
                addModal({
                    name: INGREDIENTS_NOT_FOUND,
                    data: { link }
                });
                self.clearLink();
            },

            handleResponse: () => cond([
                [ propSatisfies(isNil, 'error'), self.handleLink ],
                [ ifNot, self.handleError]
            ]),

            handleDataFromLink(props) {
                const { link = self.link, addModal, addRecipe } = props;
                getIngredientsAndRecipeFromLink({ link, addModal, addRecipe })
                    .then(this.handleResponse());
            }
        }
    })
;

const recipeSearchStore = RecipeSearchStore.create();

export default recipeSearchStore;