import { getLinkElement } from '../services/link.service';
import { useStateValue } from '../stateManagement/stateManagement';

export function useLink() {
    const [, dispatch] = useStateValue();

    const manageLink = async (link) => {
        const linkElement = await getLinkElement("https://www.recetasdeescandalo.com/como-hacer-un-risotto-de-champinones-receta-deliciosa-y-sencilla/");
        console.log(linkElement);
        const { ingredients, recipe } = link;
        console.log(ingredients);
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
