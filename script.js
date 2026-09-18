function renderBooks() {
    let contentRef = document.getElementById('content');

    contentRef.innerHTML = "";

    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        contentRef.innerHTML += getBookTemplate(indexBook);
    }
}

