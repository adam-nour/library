document.addEventListener('DOMContentLoaded', function() {
  const myLibrary = [];

  function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  Book.prototype.toggleRead = function() {
    this.read = this.read === 'Yes' ? 'No' : 'Yes'; // Toggle between 'Yes' and 'No'
  };

  function addBookToLibrary(event) {
    event.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector('input[name="read"]:checked').value;

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);

    document.querySelector('.bookForm').reset();
    displayBooks();
  }

  const submitButton = document.querySelector('.btn-submit');
  submitButton.addEventListener('click', addBookToLibrary);

  const showFormButton = document.getElementById('showFormButton');
  const formCard = document.querySelector('.form-card');

  showFormButton.addEventListener('click', function() {
    formCard.classList.toggle('hidden');
  });

  function displayBooks() {
    const bookshelf = document.querySelector('.bookshelf');
    bookshelf.innerHTML = ''; // Clear existing content

    myLibrary.forEach((currentBook, index) => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');

      const bookInfo = `
        <div>
          <h3>${currentBook.title}</h3>
          <p>Author: ${currentBook.author}</p>
          <p>Pages: ${currentBook.pages}</p>
          <p>Read: ${currentBook.read}</p>
          </div>
        <div class='btn-flex'>
          <button class='del-btn' data-index='${index}'>-</button>
          <button class='toggle-read-btn' data-index='${index}'>Read</button>
        </div>
      `;

      bookDiv.innerHTML = bookInfo;
      bookshelf.appendChild(bookDiv);
    });
    const deleteButtons = document.querySelectorAll('.del-btn');
    deleteButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        const index = event.target.dataset.index;
        myLibrary.splice(index, 1);
        displayBooks();
      });
    });
    const toggleReadButtons = document.querySelectorAll('.toggle-read-btn');
    toggleReadButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        const index = event.target.dataset.index;
        myLibrary[index].toggleRead(); // Toggle read status
        displayBooks();
      });
    });
  }
});
