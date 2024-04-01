const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const imdbID = urlParams.get('id');
const urldata = "https://omdbapi.com/?apikey=1a5410af&i=" + imdbID;

fetch(urldata)
    .then(response => response.json())
    .then(response => document.getElementById("movieNameYear").innerHTML = response.Title + " " + response.Year);

fetch(urldata)
    .then(response => response.json())
    .then(response => document.getElementById("movieDirectorName").innerHTML = response.Director);

fetch(urldata)
    .then(response => response.json())
    .then(response => document.getElementById("movieGenre").innerHTML = response.Genre);

fetch(urldata)
    .then(response => response.json())
    .then(response => document.getElementById("movieActors").innerHTML = response.Actors);

fetch(urldata)
    .then(response => response.json())
    .then(response => document.getElementById("moviePlot").innerHTML = response.Plot);

fetch(urldata)
    .then(response => response.json())
    .then(response => document.getElementById("moviePoster").src = response.Poster);


