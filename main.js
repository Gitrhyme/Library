library = []
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return (`${this.title}, ${this.author}, ${this.pages}, ${this.read}`)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let addBookButton = document.getElementById('addBookButton');
    let bookForm = document.getElementById('bookForm');

    addBookButton.addEventListener('click', function () {
        if (bookForm.style.display === 'none') {
            bookForm.style.display = 'flex';
            addBookButton.textContent = 'Hide Form';
        } else {
            bookForm.style.display = 'none';
            addBookButton.textContent = 'Add Book';
        }
    })
})

function displayBooks() {
    let bookContainer = document.getElementById('bookContainer');
    bookContainer.innerHTML = '';
    library.forEach(book => {
        let card = document.createElement('div');
        card.classList.add('book-card');
        card.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read}</p>
        `;

        // Append card to book container
        bookContainer.appendChild(card);
    });

}

function addBook() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.querySelector('input[name="choice-radio"]:checked').value;
    library.push(new Book(title, author, pages, read));
    displayBooks();
}


// Add event listener to form submission
document.getElementById('bookForm').addEventListener('submit', function (event) {

    event.preventDefault();

    addBook();

    document.getElementById('bookForm').reset();

});

