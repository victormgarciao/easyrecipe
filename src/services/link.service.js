export function getLinkElement(url) {
    return new Promise((resolve) => {
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.send(null);
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                const tupi = request.responseText;
                const linkElement = document.createElement('html');
                linkElement.innerHTML = tupi;
                resolve(linkElement);
            }
        };
    });
}
