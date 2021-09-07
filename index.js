//first method, didn't pass the second test, perhaps because it was expecting more code! trying another method below.

// function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!
//   fetch('https://anapioficeandfire.com/api/books')
//   .then(res => res.json())
//   .then(data => renderBooks(data))
// }



//okay this second method didn't work any better...it does still render to the DOM like the first method, AND it still only passes the first test, like the first method.
//idk what eles is missing....error message says "renders book titles into the DOM by passing a JSON object to renderBooks():? TypeError: Cannot read property 'then' of undefined"

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
  .then(response => {return response.json()})
  .then(data => {return renderBooks(data)})
  //.then(data => renderBooks(data.name))
}

function renderBooks(books) {
  //taking the json books data (which is an array of book objects rn) 
  books.forEach(book => {
    let main = document.querySelector('main');
    let h2 = document.createElement('h2');
    h2.innerText = book.name;
    main.appendChild(h2);
    return h2;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
