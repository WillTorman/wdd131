const articles = [
    {
        id: 1,
        title: 'I Am Number Four',
        date: 'August 3, 2010',
        description: 'If you enjoy Sci-Fi action books this is a must read.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/6/6f/I_Am_Number_Four_Cover.jpg',
        imgAlt: 'Book cover for I Am Number Four',
        ages: '12-18',
        genre: 'Young adult, Science fiction',
        stars: '⭐⭐⭐⭐⭐'
    },
    {
        id: 2,
        title: 'Harry Potter and the Goblet of Fire',
        date: 'July 8, 2000',
        description: 'A classic and must read! If you enjoy adventure, plot twists, and fantasy, this book is for you.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png',
        imgAlt: 'Book cover for Harry Potter and the Goblet of Fire',
        ages: '12-17',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐⭐'
    }
]

// console.log(articles[0].title);

const container = document.querySelector('#articles-container');

articles.forEach(function (item) {
    let book = document.createElement('article');
    book.setAttribute('class', 'book');

    let html = `
    <div class="article">
        <img src="${item.imgSrc}" alt="${item.imgAlt}">
        <h2>${item.title}</h2>
        <p>Published on: ${item.date}</p>
        <p>${item.description}</p>
        <p>Recommended ages: ${item.ages}</p>
        <p>Genre: ${item.genre}</p>
        <p>Rating: ${item.stars}</p>
    </div>`;

    book.innerHTML = html;
    container.appendChild(book);
});
