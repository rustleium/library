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
addBookToLibrary('Brave New World', "Aldous Huxley", 311, 1932, "Not Read");
addBookToLibrary('1984', "George Orwell", 328, 1949, "Read");
addBookToLibrary('Siddhartha', "Hermann Hesse", 152, 1922, "Not Read");
addBookToLibrary('Dune', "Frank Herbert", 412, 1965, "Read");

function getFormValues() {
  const pagesInput = document.getElementById("pages").value;
  const titleInput = document.getElementById("title").value;
  const authorInput = document.getElementById("author").value;
  const publishedInput = document.getElementById("published").value;
  const readStatusInput = document.querySelector('input[name="readStatus"]:checked').value;

  return {
    pages: pagesInput,
    title: titleInput,
    author: authorInput,
    published: publishedInput,
    readStatus: readStatusInput,
  };
}

const submitFormBtn = document.querySelector('button[type="submit"]');

submitFormBtn.addEventListener("click", () => {
  const formData = getFormValues();
  addBookToLibrary(
    formData.title,
    formData.author, 
    formData.pages, 
    formData.published, 
    formData.readStatus
  );
  displayBooks();
  bookForm.reset();
});

function displayBooks() {
  const tableBody = document.querySelector('.book-list');
  tableBody.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const bookRow = document.createElement("tr");
    bookRow.setAttribute("data-id", index);
    bookRow.innerHTML =
      `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.published}</td>
        <td>
          <button class="read-status">${book.readStatus}</button>
          <span class="deleteBtn">×</span>
        </td>
      `
    tableBody.appendChild(bookRow);

  });
}

displayBooks();

const addNewBookBtn = document.querySelector(".new-book");
const formDialog = document.getElementById("formDialog");
const cancelBtn = document.getElementById("cancelBtn");
const bookForm = document.getElementById("bookForm");

addNewBookBtn.addEventListener("click", () => {
  formDialog.showModal();
})

cancelBtn.addEventListener("click", () => {
  formDialog.close();
})

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Page does not reload on form submit now.");
  formDialog.close();
})

Book.prototype.toggleReadStatus = function() {
  this.readStatus = this.readStatus === "Not Read" ? "Read" : "Not Read";
}

const toggleStatusButtons = document.querySelectorAll(".read-status");

toggleStatusButtons.forEach(toggleBtn => {
  toggleBtn.addEventListener("click", () => {
    toggleBtn.textContent = toggleBtn.textContent === "Read" ? "Not Read" : "Read";
    const grandParent = toggleBtn.parentElement.parentElement;
    const index = grandParent.getAttribute("data-id");
    console.log(myLibrary[index]);
    myLibrary[index].toggleReadStatus();
    console.log(myLibrary[index]);
  });
});

const deleteBtns = document.querySelectorAll(".deleteBtn");

deleteBtns.forEach(deleteBtn => {
  deleteBtn.addEventListener("click", () => {
  const parentBookRow = deleteBtn.parentElement.parentElement;
  parentBookRow.remove();
  });
});