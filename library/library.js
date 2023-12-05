const main = document.getElementById("main")
const addBtn = document.getElementById("add-btn")
const myLibrary = [];

function Book(author, title, noOfPages, isRead = false) {
    this.author = author;
    this.title = title;
    this.noOfPages = noOfPages;
    this.isRead = isRead;
}

addBtn.addEventListener("click", () => {
  main.innerHTML = `
  <form action="" id="form">
    <p>ADD BOOK</p>
    <div>
        <input type="text" id="author" placeholder="Author">
    </div>
    <div>
        <input type="text" id="title" placeholder="Title">
    </div>
    <div>
        <input type="number" id="number" min="0" placeholder="Pages">
    </div>
    <div>
        <p><input type="checkbox" id="checkbox"> Mark as read</p>
    </div>
    <div>
        <button type="submit" id="submit">Submit</button>
    </div>
  </form>
  `

  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const noOfPages = document.getElementById("number").value;
    const isRead = document.getElementById("checkbox").checked;
  
    addBookToLibrary(author, title, noOfPages, isRead);
  
    // Optionally, clear the form after submitting
    e.target.reset();
    form.style.display = "none";
  });
})

function addBookToLibrary(author, title, noOfPages, isRead) {
  const newBook = new Book(author, title, noOfPages, isRead)
  myLibrary.push(newBook)
  renderBook(newBook)
}

function renderBook(book, index) {
  const bookContainer = document.createElement("div");
  bookContainer.classList.add("book-item");

  bookContainer.innerHTML = `
    <div class="bk-author">${book.author}</div>
    <div class="bk-title">${book.title}</div>
    <div class="bk-page">${book.noOfPages} ${book.noOfPages == 1 ? "Page" : "Pages"}</div>
    <div class="bk-read">${book.isRead === true ? 'Read' : 'Not Read'}</div>
    <button class="remove-btn" data-index="${index}">Remove</button>
  `;

  main.appendChild(bookContainer);

  const removeBtn = bookContainer.querySelector(".remove-btn");
  removeBtn.addEventListener("click", () => {
    const indexToRemove = removeBtn.dataset.index;
    removeBookFromLibrary(indexToRemove);
  });
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
  renderLibrary(); 
}

function renderLibrary() {
  main.innerHTML = "";

  myLibrary.forEach((book, index) => {
    renderBook(book, index);
  });
}