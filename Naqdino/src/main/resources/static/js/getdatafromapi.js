function GetTitleFromAPI (url, ElementID) {
    fetch(url)
        .then(response => response.json())
        .then(response => document.getElementById(ElementID).innerHTML = response.Title);
}

function GetPosterFromAPI (url, ElementID) {
    fetch(url)
        .then(response => response.json())
        .then(response => document.getElementById(ElementID).src = response.Poster);
}

function GetIMDbIDFromAPI (url, ElementID) {
    fetch(url)
        .then(response => response.json())
        .then(response => document.getElementById(ElementID).href = "movie?id=" + response.imdbID);
}
