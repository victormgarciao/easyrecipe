export function getLinkElement(url) {
    return new Promise((resolve) => {
        var request = new XMLHttpRequest();
        request.open("GET", `https://cors-anywhere.herokuapp.com/${url}`, true);
        request.send();
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
