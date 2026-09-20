
function init() {
    renderBooks();
}


function renderBooks() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        contentRef.innerHTML += getBookTemplate(indexBook);
    }
}


function likeBook(indexBook) {
    if (books[indexBook].liked == false) {
        books[indexBook].liked == true;
        books[indexBook].likes++;
    } else {
        books[indexBook].liked = false;
        books[indexBook].likes--;
    }

    renderBooks();
}


function addComment(indexBook) {
    let inputRef = document.getElementById(`comment_${indexBook}`);
    let comment = inputRef.value;

    if (comment !="") {
        saveComment(indexBook, comment);
        renderBooks();
    }
}


function saveComment(indexBook, comment) {
    books[indexBook].comments.push({
        neme: "Onur",
        comment: comment
    })
}




