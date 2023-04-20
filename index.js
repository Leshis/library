const myLibrary = [];
// const bookEl = document.getElementById('book');
const newBookButton = document.getElementById('new-book');
const modal = document.getElementById('modal');
const bookForm = document.getElementById('book-form');

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    let status = '';

    if (isRead) {
        status = 'finished reading';
    } else {
        status = 'not yet read';
    }

    this.info = function info() {
        return `${title} by ${author}, ${pages} pages, ${status}`;
    };
}

function addBookToLibrary(title, author, pages, isRead) {
    myLibrary.push(new Book(title, author, pages, isRead));
}

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function handleSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('is-read').checked;
    addBookToLibrary(title, author, pages, isRead);
    closeModal();
}

newBookButton.addEventListener('click', openModal);
bookForm.addEventListener('submit', handleSubmit);

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
