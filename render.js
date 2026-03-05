function renderAllBooks() {
  let section = document.getElementById("bookInfo");
  section.innerHTML = "";

  for (let i = 0; i < books.length; i++) {

    let commentsHTML = "";

    if (books[i].comments.length > 0) {
      for (let j = 0; j < books[i].comments.length; j++) {
        commentsHTML += `
          <div class="comment_card">
            <p><strong>${books[i].comments[j].name}:</strong></p>
            <p>${books[i].comments[j].comment}</p>
          </div>
        `;
      }
    } else {
      commentsHTML = "<p>Keine Kommentare</p>";
    }

    section.innerHTML += `
      <div class="contentContainer">
        <div class="content_inhalt">
          <h2 class="border">${books[i].name}</h2>
          <img class="book" src="./img/book.png" alt="Book">
        </div>
        <div class="content_info">
          <h2 class="price_book">${books[i].price.toFixed(2)} €</h2>
          <div class="likes_container">
            <p>${books[i].likes}</p>
            <span class="heart ${books[i].liked ? "liked" : ""}" 
                  onclick="like(${i})">❤</span>
          </div>
        </div>
        <div class="border details">
          <p><strong class="detail_label">Author:</strong> ${books[i].author}</p>
          <p><strong class="detail_label">Published Year:</strong> ${books[i].publishedYear}</p>
          <p><strong class="detail_label">Genre:</strong> ${books[i].genre}</p>
        </div>
        <h2 class="comments_headline">Kommentare:</h2>
        ${commentsHTML}
      </div>
    `;
  }
}