const thumbs = document.querySelector('#thumbs')
const mainImage = document.querySelector('#largeImg')

const listener = (e) => {
    e.preventDefault()
    /** @type {HTMLElement}**/
    const target = e.target
    const link = target.closest('a')

    if (link && thumbs.contains(link)) {

        mainImage.src = link.href

    }
}




thumbs.addEventListener('click', listener)