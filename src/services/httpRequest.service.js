import { equals } from 'ramda';


export function hasRequestContent({ request }) {
    const { readyState } = request;
    return equals(readyState, 4)
}


export function handleXMLHttpRequest({ link }) {
    const request = new XMLHttpRequest();
    request.open("GET", `https://cors-anywhere.herokuapp.com/${link}`, true);
    request.send()
    return { link, request };
}
