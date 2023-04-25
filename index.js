const myLibrary = [];
const libraryEl = document.getElementById('library');
const newBookButton = document.getElementById('new-book');
//  const deleteButton = document.getElementById('delete');
const modal = document.getElementById('modal');
const bookForm = document.getElementById('book-form');

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    getReadMsg = () => `${this.isRead ? 'Finished' : 'Not yet read'}`;
}

function updateLibrary() {
    libraryEl.innerHTML = '';
    myLibrary.forEach((book) => {
        libraryEl.innerHTML += `
            <div class="book" data-index="${myLibrary.indexOf(book)}">
                <h2>${book.title}</h2>
                <h4>${book.author}</h4>
                <p>${book.pages} pages</p>
                <p>${book.getReadMsg()}</p>
                <button id="delete" class="delete-button">REMOVE</button>
            </div>
        `;
    });
}

function addBookToLibrary(title, author, pages, isRead) {
    myLibrary.push(new Book(title, author, pages, isRead));
    updateLibrary();
}

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

// function handleDelete(e) {
//     console.log(e.target);
// }

function handleSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('is-read').checked;
    addBookToLibrary(title, author, pages, isRead);
    closeModal();
    updateLibrary();
    e.target.reset();
}

newBookButton.addEventListener('click', openModal);
// deleteButton.addEventListener('click', handleDelete);
bookForm.addEventListener('submit', handleSubmit);
