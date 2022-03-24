const sliderRect = document.querySelector('.slider').getBoundingClientRect()
const thumb = document.querySelector('.thumb')
const thumbRect = thumb.getBoundingClientRect()

const mouseMove = (event) => {
    thumb.style.left = `${event.clientX - sliderRect.left}px`
    if (event.clientX - sliderRect.left < 0) thumb.style.left = '0px'
    if (event.clientX - sliderRect.right + thumbRect.width > 0) thumb.style.left = `${sliderRect.width - thumbRect.width}px`
}

const thumbCatch = (
    /**@type {MouseEvent} **/
    event
) => {

    if (event.target === thumb) {

        document.addEventListener('mousemove', mouseMove)

    }
}
thumb.ondragstart = function() {
    return false;
  };

document.addEventListener('mousedown', thumbCatch)
document.addEventListener('mouseup',()=>{document.removeEventListener('mousemove',mouseMove)})