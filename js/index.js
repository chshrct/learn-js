function clickHandler(e) {
    const fieldCoords = field.getBoundingClientRect()
    let left = e.clientX - fieldCoords.left - field.clientLeft - ball.offsetWidth / 2
    let top = e.clientY - fieldCoords.top - field.clientTop - ball.offsetHeight / 2


    if (top < 0) top = 0;
    if (left < 0) left = 0;
    if (left + ball.clientWidth > field.clientWidth) {
        left = field.clientWidth - ball.clientWidth;
    }
    if (top + ball.clientHeight > field.clientHeight) {
        top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = left + 'px'
    ball.style.top = top + 'px'
}

const ball = document.getElementById('ball')
const field = document.getElementById('field')
field.addEventListener('click', clickHandler)