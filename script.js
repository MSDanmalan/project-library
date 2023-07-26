// Reminder
// Make sure to complete step 5 and 6 of projext assignment

let myLibrary = []

class Book {
    constructor (title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    };

    readBook = () => {
        if(this === 'read') {
            return 'Read'
        };
        return 'Not read yet'
    };
    
    info = () => {
        return title + ' ' + author + ' ' + pages + ' ' + this.readBook()
    };
};


function addBookToLibrary() {
    myLibrary.push(new Book(titleInput.value, authorInput.value, pagesInput.value))
};

function displayAllBooks() {
    for(book of myLibrary){
        createCard(book)
    ;}
};

displayAllBooks()

function displayNewBook() {
    createCard(myLibrary[myLibrary.length-1])
}

function createCard(book) {
    const newCard = document.createElement('div')
    newCard.classList.add('card')

    const titleDisplay = document.createElement('div')
    titleDisplay.classList.add('titleDisplay')
    titleDisplay.textContent = book.title

    const authorDisplay = document.createElement('div')
    authorDisplay.classList.add('authorDisplay')
    authorDisplay.textContent = 'By' + ' ' + book.author

    const pagesDisplay = document.createElement('div')
    pagesDisplay.classList.add('pagesDisplay')
    pagesDisplay.textContent = book.pages + ' ' + 'pages'

    const cardButtons = document.createElement('div')
    cardButtons.classList.add('cardButtons')


    const isReadButton = document.createElement('button')
    if(checkbox.checked === true) {
        isReadButton.classList.add('readButton', 'read')
        isReadButton.textContent = 'Read'
    }
    else{
        isReadButton.classList.add('readButton')
        isReadButton.textContent = 'Not read'
    }
    isReadButton.addEventListener('click', () => {
        isReadButton.classList.toggle('read')
        if(isReadButton.classList.contains('read')) {
            isReadButton.textContent = 'Read'
        }
        else if(!isReadButton.classList.contains('read')) {
            isReadButton.textContent = 'Not read'
        }
    });

    const removeButton = document.createElement('button')
    removeButton.classList.add('removeButton')
    removeButton.textContent = 'Delete'
    removeButton.addEventListener('click', () => {
        removeButton.parentElement.parentElement.setAttribute('style', 'display: none;')
    });

    newCard.append(titleDisplay, authorDisplay, pagesDisplay, cardButtons)
    cardButtons.append(isReadButton, removeButton)
    bookSection.appendChild(newCard)
};

const bookSection = document.querySelector('.bookSection')
const addBook = document.querySelector('.addBook')
const bookForm = document.querySelector('.bookForm')
const addButton = document.querySelector('.addButton')
const cancelButton = document.querySelector('.cancelButton')
const card = document.querySelectorAll('.card')
const addBookForm = document.getElementById('addBookForm')
const titleInput = document.getElementById('titleInput')
const authorInput = document.getElementById('authorInput')
const pagesInput = document.getElementById('pagesInput')
const overlay = document.querySelector('.overlay')
const readButton = document.querySelectorAll('.readButton')
const deleteButton = document.querySelectorAll('.removeButton')
const checkbox = document.querySelector('.checkbox')

addBook.addEventListener('click', () => {
    showOverlay()
    displayForm()
    checkbox.checked = false
});

readButton.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('read')
        if(button.classList.contains('read')) {
            button.textContent = 'Read'
        }
        else if(!button.classList.contains('read')) {
            button.textContent = 'Not read'
        }
    });
});

deleteButton.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.parentElement.setAttribute('style', 'display: none;')
    });
});

cancelButton.addEventListener('click', () => {
    hideOverlay()
    hideForm()
});

function displayForm() {
    bookForm.setAttribute('style', 'display: block;')
}

function hideForm() {
    bookForm.setAttribute('style', 'display: none;')
}

function showOverlay() {
    overlay.setAttribute('style', 'display: block;')
};

overlay.addEventListener('click', () => {
    overlay.setAttribute('style', 'display: none;')
    hideForm()
})

function hideOverlay() {
    overlay.setAttribute('style', 'display: none;')
}

addButton.addEventListener('click', function(event){
    event.preventDefault();
    if (titleInput.value !== '' && authorInput.value !== '' && pagesInput.value !== null) {
        addBookToLibrary();
        clearInputs();
        hideOverlay();
        hideForm()
        displayNewBook();
    };
});

function clearInputs() {
    titleInput.value = ''
    authorInput.value = ''
    pagesInput.value = null
};