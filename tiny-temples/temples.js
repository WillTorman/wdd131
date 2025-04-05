const temples = [
    {
        name: 'Temples',
        dateDedicated: '04/06/1893',
        tags: ['Rexburg', 'Idaho Falls', 'Meridian', 'Boise', 'Gilbert', 'Washington D.C.', 'Los Angeles'],
        description: 'Various temples that have been printed and enjoyed by customers like you!',
        image: './images/lot.jpg'
    },
    {
        name: 'Salt Lake Temple',
        dateDedicated: '04/06/1893',
        tags: ['Utah', 'Salt Lake'],
        description: 'It is a temple',
        image: './images/slc.jpg'
    },
    {
        name: 'Rexburg Idaho Temple',
        dateDedicated: '02/10/2008',
        tags: ['Idaho', 'Rexburg'],
        description: 'It is a temple',
        image: './images/rexburg.jpg'
    },
    {
        name: 'Washington D.C. Temple',
        dateDedicated: '11/19/1974',
        tags: ['Virginia', 'Washington D.C.'],
        description: 'It is a temple',
        image: './images/dc.jpg'
    },
    {
        name: 'Idaho Falls Temple',
        dateDedicated: '09/23/1945',
        tags: ['Idaho', 'Idaho Falls'],
        description: 'It is a temple',
        image: './images/idaho-falls.jpg'
    },
    {
        name: 'Nauvoo Temple',
        dateDedicated: '05/01/2002',
        tags: ['Illinois', 'Nauvoo', 'Historic', 'Engraving'],
        description: 'It is a temple',
        image: './images/engrave.jpg'
    },
    {
        name: 'Meridian Idaho Temple',
        dateDedicated: '12/15/2019',
        tags: ['Idaho', 'Meridian'],
        description: 'All temples are about 3 to 5 inches in length. Here is a picture of the Meridian Idaho Temple for reference.',
        image: './images/scale-top.jpg'
    },
    {
        name: 'Gilbert Arizona Temple',
        dateDedicated: '03/02/2014',
        tags: ['Arizona', 'Gilbert'],
        description: 'It is a temple',
        image: './images/gilbert.jpg'
    }
    ]
    
    function templeTemplate(temple) {
        return `
            <img src="${temple.image}" alt="${temple.name}">
            <div class="carousel-content">
                <h2>${temple.tags.join(', ')}</h2>
                <h1>${temple.name}</h1>
                <p>${temple.description}</p>
            </div>
        `
    }

    function carousel(temples) {
        let currentI = 0;
        const carouselContainer = document.querySelector('.carousel');

        function renderTemple(index) {
            const temple = temples[index];
            carouselContainer.innerHTML = templeTemplate(temple);
        }

        function nextTemple() {
            currentI = (currentI + 1) % temples.length;
            renderTemple(currentI);
        }

        function previousTemple() {
            currentI = (currentI - 1 + temples.length) % temples.length;
            renderTemple(currentI);
        }

        renderTemple(currentI);

        document.querySelector('.next').addEventListener('click', nextTemple);
        document.querySelector('.previous').addEventListener('click', previousTemple);

        // Add event listener for keyboard arrows
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                nextTemple();
            } else if (event.key === 'ArrowLeft') {
                previousTemple();
            }
        });
    }
    
    function tagsTemplate(tags) {
        return tags.map((tag) => `<h2>${tag}</h2>`).join(' ');
    }
    
    function init() {
        carousel(temples);
    }
    
    init();