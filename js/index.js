/**
 * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
 *
 * @param {Node} anchor     элемент, около которого позиционируется другой элемент
 * @param {string} position одно из: top/right/bottom
 * @param {Node} elem       элемент, который позиционируется
 *
 * Оба элемента elem и anchor должны присутствовать в документе
 */
function positionAt(anchor, position, elem) {
    const anchorRect = anchor.getBoundingClientRect()
    const elemHeight = elem.offsetHeight
    if (position ==='top'){
        elem.style.left = anchorRect.left + 'px'
        elem.style.top = (anchorRect.top-elemHeight) + 'px'
    }
    if (position ==='right'){
        elem.style.left = anchorRect.right + 'px'
        elem.style.top = anchorRect.top + 'px'
    }
    if (position ==='bottom'){
        elem.style.left = anchorRect.left + 'px'
        elem.style.top = anchorRect.bottom + 'px'
    }
}

/**
 * Показывает заметку с заданным содержимым на заданной позиции
 * относительно элемента anchor.
 */
function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");