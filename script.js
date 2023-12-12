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
    }
  
    const submitButton = document.querySelector('.btn-submit');
  
    submitButton.addEventListener('click', addBookToLibrary);
  });
  