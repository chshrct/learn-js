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
    const elemWidth = elem.offsetWidth
    if (position ==='top-out'){
        elem.style.left = (anchorRect.left+ pageXOffset) + 'px'
        elem.style.top = (anchorRect.top+ pageYOffset-elemHeight) + 'px'
    }
    if (position ==='right-out'){
        elem.style.left = (anchorRect.right+ pageXOffset) + 'px'
        elem.style.top = (anchorRect.top+ pageYOffset) + 'px'
    }
    if (position ==='bottom-out'){
        elem.style.left = (anchorRect.left+ pageXOffset) + 'px'
        elem.style.top = (anchorRect.bottom+ pageYOffset) + 'px'
    }
    if (position ==='top-in'){
        elem.style.left = (anchorRect.left+ pageXOffset) + 'px'
        elem.style.top = (anchorRect.top+ pageYOffset) + 'px'
    }
    if (position ==='right-in'){
        elem.style.left = (anchorRect.right+ pageXOffset - elemWidth)  + 'px'
        elem.style.top = (anchorRect.top+ pageYOffset) + 'px'
    }
    if (position ==='bottom-in'){
        elem.style.left = (anchorRect.left+ pageXOffset) + 'px'
        elem.style.top = (anchorRect.bottom+ pageYOffset - elemHeight) + 'px'
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

showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-in", "note bottom-in");