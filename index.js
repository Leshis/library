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

    let status = '';

    if (isRead) {
        status = 'Finished reading';
    } else {
        status = 'Not yet read';
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
    e.target.reset();
}

// function updateLibrary() {
//     libraryEl.innerHTML = '';
//     myLibrary.forEach((book) => {
//         libraryEl.innerHTML += `
//             <div class="book">
//                 <div class="book-desc">
//                     ${book.title} by ${book.author}, ${book.pages} pages
//                 </div>
//                 <div class="isRead">${book.status}</div>
//             </div>
//         `;
//     });
// }

newBookButton.addEventListener('click', openModal);
bookForm.addEventListener('submit', handleSubmit);

myLibrary.forEach((book) => {
    libraryEl.innerHTML += `
        <div class="book">
            <div class="book-desc">
                ${book.title} by ${book.author}, ${book.pages} pages
            </div>
            <div class="isRead">${book.status}</div>
        </div>
    `;
});
