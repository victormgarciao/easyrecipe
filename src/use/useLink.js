import { getLinkElement } from '../services/link.service';
import { useStateValue } from '../stateManagement/stateManagement';

export function useLink() {
    const [, dispatch] = useStateValue();

    const manageLink = async (link) => {
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
                console.log('whaaa', itemsList)
                itemsList.forEach((item) => {
                    ingredients.push({ recipeLink: recipe.href, ingredient: item.textContent, recipeTitle: recipe.title });
                })
                break;
            }
        }

        console.log(ingredients);
       

        // const tupi = linkElement.getElementsByTagName('body')[0];
        // var content = tupi.textContent || tupi.innerText;
        // var hasText = content.indexOf("ingredient")!==-1;
        // // if (hasText) {
        // //     document.getElementById("show").style.display = 'block';
        // // } else {
        // //     document.getElementById("show").style.display = 'none';
        // // }

        // console.log(hasText);

        // const { ingredients } = link;
        dispatch({
            type: 'ADD_INGREDIENTS',
            payload: ingredients,
        });
        dispatch({
            type: 'ADD_RECIPE',
            payload: recipe,
        });
    };

    return manageLink;
}
