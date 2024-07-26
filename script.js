document.addEventListener('DOMContentLoaded', () => {
    // Load movie data dynamically
    const popularMoviesGrid = document.querySelector('.movie-grid.popular-movies');
    const continueWatchingGrid = document.querySelector('.movie-grid.continue-watching');
    const tvShowsGrid = document.querySelector('.movie-grid.tv-shows');
    

    const popularMovies = [
        { title: "Yeh Jawaani Hai Deewani", image: "images/movie1.jpg" },
        { title: "3 Idiots", image: "images/movie2.jpg" },
        { title: "Animal", image: "images/movie3.jpg" },
        { title: "Pathaan", image: "images/movie4.jpg" },
        { title: "Jawan", image: "images/movie5.jpg" }
    ];

    const continueWatchingMovies = [
        { title: "Avengers: Endgame", image: "images/continue1.jpg", progress: 70 },
        { title: "The Mandalorian", image: "images/continue2.jpg", progress: 50 },
        { title: "WandaVision", image: "images/continue3.jpg", progress: 30 },
        { title: "Loki", image: "images/continue4.jpg", progress: 90 },
        { title: "Black Widow", image: "images/continue5.jpg", progress: 20 }
    ];

    const tvShows = [
        { title: "Breaking Bad", image: "images/tvshow1.jpg" },
        { title: "Game of Thrones", image: "images/tvshow2.jpg" },
        { title: "Stranger Things", image: "images/tvshow3.jpg" },
        { title: "The Witcher", image: "images/tvshow4.jpg" },
        { title: "The Office", image: "images/tvshow5.jpg" }
    ];


    function loadMovies(movieArray, container, isContinueWatching = false) {
        movieArray.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');
            movieItem.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
            `;
            if (isContinueWatching) {
                const progressBar = document.createElement('div');
                progressBar.classList.add('progress-bar');
                const progress = document.createElement('div');
                progress.classList.add('progress');
                progress.style.width = `${movie.progress}%`;
                progressBar.appendChild(progress);
                movieItem.appendChild(progressBar);
            }
            container.appendChild(movieItem);
        });
    }

    loadMovies(popularMovies, popularMoviesGrid);
    loadMovies(continueWatchingMovies, continueWatchingGrid, true);
    loadMovies(tvShows, tvShowsGrid);

    // Search functionality
    const searchInput = document.getElementById('search');
    const searchButton = document.getElementById('search-button');

    function searchMovies() {
        const query = searchInput.value.toLowerCase();
        const allMovies = document.querySelectorAll('.movie-item');
        allMovies.forEach(movie => {
            const title = movie.querySelector('h3').textContent.toLowerCase();
            movie.style.display = title.includes(query) ? 'block' : 'none';
        });
    }

    searchButton.addEventListener('click', searchMovies);
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchMovies();
        }
    });
});
