const contents = document.querySelector('#contents')

const linksListener = (
    /** @type {Event} **/
    event) => {
    event.preventDefault()

    const target = event.target
    const link = target.closest('a')
    if (link && contents.contains(link)) {
        confirm(`Leave for ${link.href}`)
            && (window.location = link.href)
    }

}

contents.addEventListener('click', linksListener)