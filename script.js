document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');

    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
        carouselItems.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
            item.style.opacity = index === currentIndex ? '1' : '0';
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Auto-play carousel
    setInterval(() => {
        currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }, 3000);

    // Load movie data dynamically
    const movieGrid = document.querySelector('.movie-grid');
    const movies = [
        { title: "Yeh Jawaani Hai Deewani", image: "images/movie1.jpg" },
        { title: "3 Idiots", image: "images/movie2.jpg" },
        { title: "Animal", image: "images/movie3.jpg" },
        { title: "Pathaan", image: "images/movie4.jpg" },
        { title: "Jawan", image: "images/movie5.jpg" }
    ];

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        movieGrid.appendChild(movieItem);
    });
});
