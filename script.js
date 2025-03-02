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