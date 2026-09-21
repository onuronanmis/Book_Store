
function getBookTemplate(indexBook) {
    return /*html*/`
        <article class="book">
            ${getBookHeaderTemplate(indexBook)}
            ${getBookImageTemplate(indexBook)}
            ${getBookInfoTemplate(indexBook)}
            ${getCommentAreaTemplate(indexBook)}
        </article>
    `
}


function getBookHeaderTemplate(indexBook) {
    return /*html*/`
        <div class="book_title">
            <h2>${books[indexBook].name}</h2>
        </div>
    `;
}


function getBookImageTemplate(indexBook) {
    return /*html*/`
        <div class="book_image">
            <img src="./assets/img/${images[indexBook]}" 
            alt="${books[indexBook].name}">
        </div>
    `;
}


function getBookInfoTemplate(indexBook) {
    return /*html*/`
        <div class="book_info">
            ${getPriceLikeTemplate(indexBook)}
            ${gettableTemplate(indexBook)}
        </div>
    `;
}


function getPriceLikeTemplate(indexBook) {
    return /*html*/`
        <div class="price_like">
            <h3>${books[indexBook].price.toFixed(2)} €</h3>
            <div class="like_area">
                <span>${books[indexBook].likes}</span>
                <button class="heart_button" onclick="likeBook(${indexBook})">
                    ${getHeartTemplate(indexBook)}
                </button>
            </div>
        </div>
    `;
}


function getHeartTemplate(indexBook) {
    let likedClass = "";

    if (books[indexBook].liked == true) {
        likedClass = "liked";
    } else {
        likedClass = "";
    }

    return /*html*/`
        <svg class="heart_icon ${likedClass}" viewBox="0 0 24 24">
            <path d="M12 21s-8-4.8-10-10.5C.5 6.5 3.2 3 7 3
            c2.2 0 4 1.2 5 2.7C13 4.2 14.8 3 17 3
            c3.8 0 6.5 3.5 5 7.5C20 16.2 12 21 12 21z"/>
        </svg>
    `;
}


function gettableTemplate(indexBook) {
    return /*html*/`
        <table>
            <tr>
                <th>Author</th>
                <td> ${books[indexBook].author}</td>
            </tr>
            <tr>
                <th>Erscheinungsjahr</th>
                <td> ${books[indexBook].publishedYear}</td>
            </tr>
            <tr>
                <th>Genre</th>
                <td> ${books[indexBook].genre}</td>
            </tr>
        </table>
    `;
}


function getCommentAreaTemplate(indexBook) {
    return /*html*/`
        <div class="comment_area">
            <h3>Kommentare:</h3>
            <div class="comments">
                ${getCommentsTemplate(indexBook)}
            </div>
            ${getCommentInputTemplate(indexBook)}
        </div>
    `;
}


function getCommentsTemplate(indexBook) {
    let commentsHTML = "";

    for (let indexComment = 0; indexComment < books[indexBook].comments.length; indexComment++) {
        commentsHTML += getSingleCommentTemplate(indexBook, indexComment);
    }

    return commentsHTML;
}


function getSingleCommentTemplate(indexBook, indexComment) {
    return /*html*/`
        <div class="comment">
            <p>[${books[indexBook].comments[indexComment].name}]</p>
            <span>: ${books[indexBook].comments[indexComment].comment}</span>
        </div>
    `;
}


function getCommentInputTemplate(indexBook) {
    return /*html*/`
        <div class="comment_input">
            <input id="comment_${indexBook}" type="text" placeholder="Schreibe deinen Kommentar....">
            <button class="send_button" onclick="addComment(${indexBook})">
                <svg viewBox="0 0 24 24">
                    <path d="M22 2L9.5 14.5M22 2L14 22
                    L9.5 14.5L2 10L22 2Z"/>
                </svg>
            </button>
        </div>
    `;
}

