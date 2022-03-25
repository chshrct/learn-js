const arrow = document.querySelector('#arrowTop')
arrow.hidden = true
const documentRect = document.documentElement.getBoundingClientRect()

const scrollHandler = () => {
    arrow.hidden = documentRect.height > document.documentElement.scrollTop

}

window.addEventListener('scroll', scrollHandler)
arrow.addEventListener('click', () => {
    document.documentElement.scrollTo(0, 0)
})