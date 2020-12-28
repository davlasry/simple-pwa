const QUOTES_LENGTH = 10;

const urls = new Array(QUOTES_LENGTH).fill('https://api.kanye.rest');

const promises = urls.map(url => {
    return fetch(url)
        .then(response => response.json())
        .then(response => {
            return response.quote;
        })
});

fetchData();

function fetchData() {
    Promise.all(promises)
        .then(quotes => {
            // console.log(quotes);
            quotes.forEach(quote => {
                const node = document.createElement("LI");
                const textNode = document.createTextNode(quote);
                node.appendChild(textNode);
                document.querySelector(".quotes-list").appendChild(node);
            })
        })
}
