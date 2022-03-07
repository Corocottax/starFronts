const clickCharacters = document.querySelector(".clickCharacters");
const clickMovies = document.querySelector(".clickMovies");
const clickPlanets = document.querySelector(".clickPlanets");
clickCharacters.addEventListener("click", () => fetchCharacters());
clickMovies.addEventListener("click", () => fetchMovies());
clickPlanets.addEventListener("click", () => fetchPlanets());

const fetchCharacters = async() => {

    clickCharacters.style = "border-bottom: solid whitesmoke 1px";
    clickMovies.style = "border: none";
    clickPlanets.style = "border: none";

    const apiCharacters = await fetch("https://starwars-server.vercel.app/characters");

    const formatedCharacters = await apiCharacters.json();

    const characters = formatedCharacters.data.characters;

    pintarCharacters(characters);

}

const fetchMovies = async() => {

    clickCharacters.style = "border: none";
    clickMovies.style = "border-bottom: solid whitesmoke 1px";
    clickPlanets.style = "border: none"

    const apiMovies = await fetch("https://starwars-server.vercel.app/movies");

    const formatedMovies = await apiMovies.json();

    const movies = formatedMovies.data.movies;

    pintarMovies(movies);

}

const fetchPlanets = async() => {

    clickCharacters.style = "border: none";
    clickMovies.style = "border: none";
    clickPlanets.style = "border-bottom: solid whitesmoke 1px"

    const apiPlanets = await fetch("https://starwars-server.vercel.app/planets");

    const formatedPlanets = await apiPlanets.json();

    const planets = formatedPlanets.data.planets;

    pintarPlanets(planets);

}

const pintarCharacters = (characters) => {

    const album = document.querySelector(".album");
    album.innerHTML = "";
    const h1$$ = document.createElement("h1");
    h1$$.textContent = "Characters"

    characters.map((character) => {

        const carta = document.createElement("div");
        const nombre = document.createElement("h3");

        carta.classList.add("carta");
        nombre.classList.add("nombre");

        nombre.textContent = character.name;
        carta.style = `background-image: url(${character.image})`;

        album.appendChild(h1$$);
        album.appendChild(carta);
        carta.appendChild(nombre);

    })


} 

const pintarMovies = (movies) => {

    const album = document.querySelector(".album");
    album.innerHTML = "";
    const h1$$ = document.createElement("h1");
    h1$$.textContent = "Movies"

    movies.map((movie) => {

        const carta = document.createElement("div");
        const titulo = document.createElement("h3");

        carta.classList.add("cartaMovie");
        titulo.classList.add("nombre");

        titulo.textContent = movie.name;
        carta.style = `background-image: url(${movie.poster})`;

        album.appendChild(h1$$);
        album.appendChild(carta);
        carta.appendChild(titulo);

    })

} 

const pintarPlanets = (planets) => {

    const album = document.querySelector(".album");
    album.innerHTML = "";
    const h1$$ = document.createElement("h1");
    h1$$.textContent = "Planets"

    planets.map((planet) => {

        const carta = document.createElement("div");
        const nombre = document.createElement("h3");

        carta.classList.add("cartaPlanet");
        nombre.classList.add("nombre");

        nombre.textContent = planet.name;
        carta.style = `background-image: url(${planet.image})`;

        album.appendChild(h1$$);
        album.appendChild(carta);
        carta.appendChild(nombre);

    })

} 

fetchCharacters();