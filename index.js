// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

const myLibrary = [];
const libraryEl = document.getElementById('library');
const newBookButton = document.getElementById('new-book');
const deleteButton = document.getElementById('delete');
const modal = document.getElementById('modal');
const bookForm = document.getElementById('book-form');

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        this.uuid = uuidv4();
    }

    getReadMsg = () => `${this.isRead ? 'Finished' : 'Not yet'} reading`;

    toggleFavourite() {
        this.isFavourite = !this.isFavourite;
    }
}

function updateLibrary() {
    libraryEl.innerHTML = '';
    myLibrary.forEach((book) => {
        libraryEl.innerHTML += `
             ${book}
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

function handleDelete(e) {
    console.log(e.target.id);
    updateLibrary();
}

function handleSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('is-read').checked;
    addBookToLibrary(title, author, pages, isRead);
    closeModal();
    e.target.reset();
}

newBookButton.addEventListener('click', openModal);
deleteButton.addEventListener('click', handleDelete);
bookForm.addEventListener('submit', handleSubmit);
