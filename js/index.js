const messages = document.querySelectorAll('.pane')
function clickHandler(e){
    e.currentTarget.parentElement.hidden=true
}
for(let message of messages){
 const button = document.createElement('button')
    button.addEventListener('click',clickHandler)
    button.className='remove-button'
    button.textContent = '[x]'
    button.style.float='right'
    message.prepend(button)
}