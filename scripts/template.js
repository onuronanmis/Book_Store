
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