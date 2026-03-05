
function like(index) {
    if (books[index].liked === true) {
        books[index].liked = false;
        books[index].likes--;
    } else {
        books[index].liked = true;
        books[index].likes++;
    }
    renderAllBooks(); // alles neu zeichnen
}