import { pipe, equals, cond, isNil, not } from 'ramda';
import { createRecipeObject, createIngredientsObject } from './data.service';


function makeElementWithHttpRequest(props) {
    const { request } = props;
    const htmlFromHttpRequest = request.responseText;
    const linkElement = document.createElement('html');
    linkElement.innerHTML = htmlFromHttpRequest;
    return { ...props, linkElement };
}

export const handleDataFromElement = pipe(
    makeElementWithHttpRequest,
    createRecipeObject,
    createIngredientsObject,
);

function hasHttpRequestContent(props) {
    const { request: { readyState } } = props;
    return equals(readyState, 4)
}

const getDataFromHttpRequest = cond([
    [hasHttpRequestContent, handleDataFromElement]
]);

export function onHttpRequestReadyStateChange(props) {
    return new Promise((resolve) => {
        const { request } = props;
        request.onreadystatechange = function handleState() {
            const data = getDataFromHttpRequest(props);


            // PONER ESTO BONITO
            cond([[
                () => not(isNil(data)), () => {
                    resolve(data)
                }
            ]])()


            
        };
    });
};

export function sendHttpRequest(props) {
    const { request } = props;
    request.send();
    return props;
}

export function openHttpRequestWithLink(props) {
    const { request, link } = props;
    request.open("GET", `https://cors-anywhere.herokuapp.com/${link}`, true);
    return props;
}

export function getHttpRequest(props) {
    return { ...props, request: new XMLHttpRequest() };
}