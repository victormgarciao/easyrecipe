import { cond, identity, isNil, not, pipe, propSatisfies } from "ramda";
import { getBodyElementsArray } from "../../services/dom.service";
import { findIngredientsListFromElements } from "../../services/search-engines/elements.engine";
import { findIngredientsListFromIndex } from "../../services/search-engines/header-index.engine";
import { handleXMLHttpRequest, hasRequestContent } from "../../services/httpRequest.service";
import { ifNot } from "../../utils/common.utils";

export function getRecipeSearchActions(self) {
    return {
        setLink(link) { self.link = link },


        clearLink() { self.link = '' },

        
        setLinkFromEvent(event) {
            const link = event.target.value
            self.setLink(link);
        },


        getRecipeFromLink({ link }){ 
            return pipe(
                handleXMLHttpRequest,
                self.getRecipeOnReadyStateChange,
            )({ link });
        },


        getRecipeOnReadyStateChange({ request, link }) {
            return new Promise((resolve) => {
                request.onreadystatechange = function handleState() {
                    function hasRecipeData(data) { return not(isNil(data)) }
                    function resolveData(data) { resolve(data) }

                    pipe(
                        cond([ [ hasRequestContent, self.getRecipe() ] ]),
                        cond([ [ hasRecipeData, resolveData ] ]),
                    )({ request, link })
                };
            });
        },


        getRecipe: () =>  pipe(
            self.getPropsForRecipe,
            self.getRecipeData,
            self.handleRecipeData(),
        ),

        
        getPropsForRecipe({ request, link }) {
            const htmlFromHttpRequest = request.responseText;
            const linkElement = document.createElement('html');
            linkElement.innerHTML = htmlFromHttpRequest;
            return { link, linkElement };
        },


        getRecipeData({ linkElement, link }) {
            const recipeTitle = self.getTitleFromElement({ linkElement });
            const bodyElementsArray = getBodyElementsArray(linkElement);
            return {
                link,
                listOfIngredients: self.searchIngredients({ bodyElementsArray }),
                recipeTitle,
            };
        },

        searchIngredients({ bodyElementsArray }) {
            const firstSearch = self.searchByElements;
            const secondSearch = self.searchByHeader;
            const isFirstSearchSuccess = propSatisfies(isNil, 'bodyElementsArray');

            return pipe(
                firstSearch,
                cond([
                    [ isFirstSearchSuccess, identity ],
                    [ ifNot, secondSearch ],
                ]),
            )({ bodyElementsArray });
        },


        searchByElements({ bodyElementsArray }) {
            function returnBodyElementsArray() { return { bodyElementsArray} };
            const returnListOfIngredients = identity;

            return cond([
                [ isNil, returnBodyElementsArray ],
                [ ifNot, returnListOfIngredients ]
            ])(findIngredientsListFromElements({ elemenstArray: bodyElementsArray }))
        },


        searchByHeader({ bodyElementsArray }) {
            return findIngredientsListFromIndex(bodyElementsArray);
        },


        handleRecipeData: () => (
            cond([
                [ propSatisfies(isNil, 'listOfIngredients'), self.createRecipeError ],
                [ ifNot, self.createRecipe ],
            ])
        ),

        
        createRecipe({ listOfIngredients, link, recipeTitle }) {
            const ingredientListItemElementsArray = [...listOfIngredients.getElementsByTagName('LI')];
            const ingredientsList =
                ingredientListItemElementsArray.map(self.getIngredientFromElement);

            return {
                recipe: {
                    href: link,
                    title: recipeTitle,
                    ingredientsList,
                },
            };
        },


        createRecipeError() {
            return {
                ingredientsList: [],
                error: new Error('Ingredients not found'),
            }
        },
    }
};
