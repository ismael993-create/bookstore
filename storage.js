function saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage() {
    let savedBooks = localStorage.getItem("books");
    if (savedBooks != null) {
        books = JSON.parse(savedBooks);
    }
}