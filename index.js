const myLibrary = [];
// const bookEl = document.getElementById('book');
const newBookButton = document.getElementById('new-book');

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

newBookButton.addEventListener('click', () => {});

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
