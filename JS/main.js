let myLibrary = [
  // {
  //   title: "Pizza.",
  //   author: "Ryel.",
  //   pages: 69,
  // },
  // {
  //   title: "Movies.",
  //   author: "Ryel.",
  //   pages: 69,
  // },
  // {
  //   title: "Video Games.",
  //   author: "Ryel.",
  //   pages: 69,
  // },
];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  let book = new Book(title, author, pages);
  myLibrary.push(book);
}

let submitButton = document.querySelector(".submit-btn");

submitButton.addEventListener("click", (bookData) => {
  bookData.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  pages = parseInt(pages);

  addBookToLibrary(title, author, pages);
  let form = document.querySelector("form");
  form.reset();

  pushToDom();
});

console.log(myLibrary);

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

    bookDiv.append(title, author, pages);
    container.appendChild(bookDiv);
  });
}
