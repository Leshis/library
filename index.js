const myLibrary = [];
const libraryEl = document.getElementById('library');
const newBookButton = document.getElementById('new-book');
const modal = document.getElementById('modal');
const bookForm = document.getElementById('book-form');

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.getReadMsg = function getReadMsg() {
        if (isRead) {
            return 'Finished reading';
        }
        return 'Not yet read';
    };
}

function updateLibrary() {
    libraryEl.innerHTML = '';
    myLibrary.forEach((book) => {
        libraryEl.innerHTML += `
            <div class="book">
                <div class="book-desc">
                    ${book.title} by ${book.author}, ${book.pages} pages
                </div>
                <div class="isRead">${book.getReadMsg()}</div>
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
bookForm.addEventListener('submit', handleSubmit);
