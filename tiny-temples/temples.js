const temples = [
    {
        name: 'Rexburg Idaho Temple',
        dateDedicated: '02/10/2008',
        tags: ['Idaho', 'Rexburg'],
        description: 'It is a temple',
        image: './images/rexburg',
    },
    {
        name: 'Salt Lake Temple',
        dateDedicated: '04/06/1893',
        tags: ['Utah', 'Salt Lake'],
        description: 'It is a temple',
        image: './images/slc.jpg',
    },
    {
        name: 'Washington D.C. Temple',
        dateDedicated: '11/19/1974',
        tags: ['Virginia', 'Washington D.C.'],
        description: 'It is a temple',
        image: './images/dc.jpg',
    },
    ]
    
    function templeTemplate(temple) {
        return `
            <img src="${temple.image}" alt="${temple.name}">
            <h2>${tagsTemplate(temple.tags)}</h2>
            <h1>${temple.name}</h1>
            <p>${temple.description}</p>
        `
    }

    function carousel(temples) {
        let carousel = 
    }
    
    function tagsTemplate(tags) {
        return tags.map((tag) => `<h2>${tag}</h2>`).join(' ');
    }
    
    // function renderRecipes(recipeList) {
    //     let recipeContainer = document.querySelector('.recipe');
    //     let html = recipeTemplate(recipeList);
    //     recipeContainer.innerHTML += html;
    // }
    
    function init() {
        
    }
    
    init();