document.addEventListener('DOMContentLoaded', function() {
    const myLibrary = [];
  
    function Book(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
  
    function addBookToLibrary(event) {
      event.preventDefault(); 
      let title = document.querySelector("#title").value;
      let author = document.querySelector("#author").value;
      let pages = document.querySelector("#pages").value;
      let read = document.querySelector("#read").value;
  
      const book = new Book(title, author, pages, read);
      myLibrary.push(book);
  
      console.log(myLibrary);
      document.querySelector('.bookForm').reset(); 
      displayBooks()
    }
  
    const submitButton = document.querySelector('.btn-submit');
  
    submitButton.addEventListener('click', addBookToLibrary);
    



    function displayBooks() {
      const bookshelf = document.querySelector('.bookshelf');
      bookshelf.innerHTML = ''; // Clear existing content
    
      for (let i = 0; i < myLibrary.length; i++) {
        const currentBook = myLibrary[i];
    
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
    
        // Create a string with book information
        const bookInfo = `
          <h3>${currentBook.title}</h3>
          <p>Author: ${currentBook.author}</p>
          <p>Pages: ${currentBook.pages}</p>
          <p>Read: ${currentBook.read}</p>
        `;
    
        bookDiv.innerHTML = bookInfo;
        bookshelf.appendChild(bookDiv); // Append the book element to the bookshelf
      }
    }
  });
  