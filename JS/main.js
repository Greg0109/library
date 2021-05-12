// GLOBAL VARIABLES

let myLibrary = [];

let submitButton = document.querySelector(".submit-btn");
let form = document.querySelector("form");
let addBook = document.querySelector(".add-book");

// FUNCTIONS

function Book(title, author, pages, read = "Not yet read") {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages) {
  let book = new Book(title, author, pages);
  myLibrary.push(book);
}

function pushToDom() {
  let container = document.querySelector(".js-container");
  container.innerHTML = "";

  myLibrary.forEach(function (book) {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    let title = document.createElement("h3");
    title.classList.add("book-title");
    title.textContent = book.title;

    let author = document.createElement("p");
    author.classList.add("book-author");
    author.textContent = "Author: " + book.author;

    let pages = document.createElement("p");
    pages.classList.add("book-pages");
    pages.textContent = "Pages: " + book.pages;

    let read = document.createElement("button");
    read.classList.add("book-read");
    read.textContent =
      book.read === "Not yet read" ? "Not yet read" : "Finished reading.";

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";

    bookDiv.append(title, author, pages, read, deleteButton);
    container.appendChild(bookDiv);

    read.addEventListener("click", readStatus);

    deleteButton.addEventListener("click", deleteBook);
  });
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

// EVENT LISTENERS

submitButton.addEventListener("click", (bookData) => {
  bookData.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  pages = parseInt(pages);
  addBookToLibrary(title, author, pages);
  form.reset();
  pushToDom();
});

addBook.addEventListener("click", function (e) {
  if (form.classList.contains("d-none")) {
    e.target.textContent = "Hide Form";
    form.classList.remove("d-none");
  } else {
    e.target.textContent = "Add Book";
    form.classList.add("d-none");
  }
});
