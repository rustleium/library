const myLibrary = [];

function Book(title, author, pages, published, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.published = published;
  this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, published, readStatus) {
  const newBook = new Book(title, author, pages, published, readStatus);
  myLibrary.push(newBook);
}

addBookToLibrary('Demian', "Hermann Hesse", 175, 1919, "Not Read");

function displayBooks() {
  myLibrary.forEach((book) => {
    const tableBody = document.querySelector('.book-list');
    const bookRow = document.createElement("tr");
    bookRow.innerHTML =
      `
        <td>${book.cover}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.published}</td>
        <td>${book.readStatus}</td>
      `
    tableBody.appendChild(bookRow);

  });
}

displayBooks();