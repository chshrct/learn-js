const open = document.getElementById('open')
const closed = document.getElementById('closed')
const list = document.getElementById('list')
const toggle = document.getElementById('toggle')

function toggleHandler(){
    open.classList.toggle('hidden')
    closed.classList.toggle('hidden')
    list.classList.toggle('hidden')
}

toggle.addEventListener('click',toggleHandler)

