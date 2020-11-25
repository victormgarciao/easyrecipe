function getElementArrayByTagName (element) {
    return function handleTagName(tagName) {
        return [...element.getElementsByTagName(tagName)];
    }
};


export function getBodyElementsArray(element) {
    const getElementsArrayByTag = getElementArrayByTagName(element);
    const bodyElement = getElementsArrayByTag('BODY')[0];
    const getBodyElementsArrayByTag = getElementArrayByTagName(bodyElement);
    return getBodyElementsArrayByTag('*');
};


export function getAllH1FromElement({ linkElement }) {
    return linkElement.getElementsByTagName('h1');
};


export function isIngredientWordInElement({ textContent }) {
    return textContent
        .toLowerCase()
        .indexOf('ingredient') !== -1;
};


export function isHeaderElement({ nodeName }) {
    return nodeName.indexOf('H') !== -1;
};


export function addBodyStylesForModalInDom() {
    document.body.style.overflow = 'hidden';
};


export function restoreBodyStylesInDom() {
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'unset';
};
