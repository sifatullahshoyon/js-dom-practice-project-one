document.body.style.backgroundColor = "navajowhite";
document.body.style.margin = 0;
document.body.style.padding = 0;

// body style End

const mainContainer =  document.getElementById('main');
mainContainer.style.height = '100vh';
mainContainer.style.maxWidth = '1140px';
mainContainer.style.margin = 'auto';

// h1 style 
const mainHeading = document.getElementById('main-heading');
mainHeading.style.backgroundColor = 'brown';
mainHeading.style.color = 'white';
mainHeading.style.padding = '10px';
mainHeading.style.textAlign = 'center';
mainHeading.style.textTransform = 'capitalize';

// Container style

const flexContainer = document.getElementById('container');
flexContainer.style.display = 'flex';
flexContainer.style.justifyContent = 'space-around'
flexContainer.style.alignItems = 'center';
flexContainer.style.gap = '40px';
flexContainer.style.flexWrap = 'wrap';


// books style

const bookHeading = document.getElementById('book-heading');
bookHeading.style.color = 'blue';
bookHeading.style.fontSize = '25px';

const books = document.getElementById('container-one');
books.style.padding = '60px';
books.style.border = '2px solid black';
books.style.backgroundColor = 'white';
books.style.borderRadius = '10px';

const booksUl = document.getElementById('books-container');

const booksItem = document.createElement('li');
booksItem.innerHTML = `
    <li>Book Name 1</li>
    <li style='color : aqua'>Book Name 2</li>
    <li>Book Name 3</li>
    <li style = 'color : lightskyblue'>Book Name 4</li>
    <li>Book Name 5</li>
`
booksItem.style.margin = '5px';
booksUl.appendChild(booksItem);

// fruit style
const fruitHeading = document.getElementById('fruit-heading');
fruitHeading.style.color = 'green';
fruitHeading.style.fontSize = '25px';

const fruits = document.getElementById('container-two');
fruits.style.padding = '60px';
fruits.style.border = '2px solid black';
fruits.style.backgroundColor = 'white';
fruits.style.borderRadius = '10px';

const fruitsUl = document.getElementById('fruit-container');

const fruitsItem = document.createElement('li');
fruitsItem.innerHTML = `
    <li>Fruit Number 1</li>
    <li>Fruit Number 2</li>
    <li>Fruit Number 3</li>
    <li style = 'color : darkorchid'>Fruit Number 4</li>
    <li>Fruit Number 5</li>
    <li>Fruit Number 6</li>
    <li style='color : tomato'>Fruit Number 7</li>
`
fruitsItem.style.margin = '5px';
fruitsUl.appendChild(fruitsItem);

// End of fruit


// places style Start
const placesHeading = document.getElementById('places-heading');
placesHeading.style.color = 'darkorchid';
placesHeading.style.fontSize = '25px';

const places = document.getElementById('container-three');
places.style.padding = '60px';
places.style.border = '2px solid black';
places.style.backgroundColor = 'white';
places.style.borderRadius = '10px';

const placesUl = document.getElementById('places-container');

const placesItem = document.createElement('li');
placesItem.innerHTML = `
    <li>Places Number 1</li>
    <li style = 'color : chartreuse'>Places Number 2</li>
    <li>Places Number 3</li>
    <li>Places Number 4</li>
    
`
placesItem.style.margin = '5px';
placesUl.appendChild(placesItem);

// End of places


// movies style Start
const moviesHeading = document.getElementById('movies-heading');
moviesHeading.style.color = 'hotpink';
moviesHeading.style.fontSize = '25px';

const movies = document.getElementById('container-four');
movies.style.padding = '60px';
movies.style.border = '2px solid black';
movies.style.backgroundColor = 'white';
movies.style.borderRadius = '10px';

const moviesUl = document.getElementById('movies-container');

const moviesItem = document.createElement('li');
moviesItem.innerHTML = `
    <li>Movies Number 1</li>
    <li>Movies Number 2</li>
    <li style = 'color : wheat'>Movies Number 3</li>
    <li>Movies Number 4</li>
    
`
moviesItem.style.margin = '5px';
moviesUl.appendChild(moviesItem);

// End of movies


// sports style Start
const sportsHeading = document.getElementById('sports-heading');
sportsHeading.style.color = 'brown';
sportsHeading.style.fontSize = '25px';

const sports = document.getElementById('container-five');
sports.style.padding = '60px';
sports.style.border = '2px solid black';
sports.style.backgroundColor = 'white';
sports.style.borderRadius = '10px';

const sportsUl = document.getElementById('sports-container');

const sportsItem = document.createElement('li');
sportsItem.innerHTML = `
    <li>sports Number 1</li>
    <li style = 'color : chocolate'>sports Number 2</li>
    <li>sports Number 3</li>
    <li style = 'color : chocolate'>sports Number 4</li>  
`
sportsItem.style.margin = '5px';
sportsUl.appendChild(sportsItem);

// End of sports

