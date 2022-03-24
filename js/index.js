const unorderedList = document.querySelector('#ul')


const clickHandler = (
    /**@type {MouseEvent} **/
    event) => {
    /**@type {HTMLElement} **/
    const target = event.target
    const selected = unorderedList.querySelectorAll('.selected')
    const li = target.closest('li')



    if (li && unorderedList.contains(li)) {

        if (!event.ctrlKey) for (let sel of selected) {
            sel.classList.remove('selected')
        }

        li.classList.add('selected')


    }

}

unorderedList.addEventListener('click', clickHandler)
unorderedList.addEventListener('mousedown', (e)=>{e.preventDefault()})