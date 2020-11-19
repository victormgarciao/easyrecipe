import { pipe, equals, cond, isNil, not } from 'ramda';
import { createRecipeObject } from './data.service';


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

        function hasFetchedData(data) { return not(isNil(data)); }
        function resolveData(data) { resolve(data) }

        const handleFetchData = cond([
            [ hasFetchedData, resolveData ]
        ]);

        request.onreadystatechange = function handleState() {
            const data = getDataFromHttpRequest(props);
            handleFetchData(data);
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