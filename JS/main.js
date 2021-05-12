// GLOBAL VARIABLES

const myLibrary = [];
const submitButton = document.querySelector(".submit-btn");
const form = document.querySelector("form");
const addBook = document.querySelector(".add-book");

// FUNCTIONS

function Book(title, author, pages, read = "Not yet read") {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages);
  myLibrary.push(book);
}

function readStatus() {
  this.parentNode.read =
    this.parentNode.read === "Not yet read"
      ? "Finished reading"
      : "Not yet read";
  this.parentNode.querySelector(".book-read").textContent =
    this.parentNode.querySelector(".book-read").textContent === "Not yet read"
      ? "Finished reading"
      : "Not yet read";
}

function deleteBook() {
  myLibrary.splice(this.parentNode, 1);
  this.parentNode.remove();
}

function pushToDom() {
  const container = document.querySelector(".js-container");
  container.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    const title = document.createElement("h3");
    title.classList.add("book-title");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.classList.add("book-author");
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement("p");
    pages.classList.add("book-pages");
    pages.textContent = `Pages: ${book.pages}`;

    const read = document.createElement("button");
    read.classList.add("book-read");
    read.textContent =
      book.read === "Not yet read" ? "Not yet read" : "Finished reading.";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";

    bookDiv.append(title, author, pages, read, deleteButton);
    container.appendChild(bookDiv);

    read.addEventListener("click", readStatus);

    deleteButton.addEventListener("click", deleteBook);
  });
}

// EVENT LISTENERS

submitButton.addEventListener("click", (bookData) => {
  bookData.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  // eslint-disable-next-line radix
  pages = parseInt(pages);
  addBookToLibrary(title, author, pages);
  form.reset();
  pushToDom();
});

addBook.addEventListener("click", (e) => {
  if (form.classList.contains("d-none")) {
    e.target.textContent = "Hide Form";
    form.classList.remove("d-none");
  } else {
    e.target.textContent = "Add Book";
    form.classList.add("d-none");
  }
});
