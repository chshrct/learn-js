const div = document.getElementById('field')
const divRect = div.getBoundingClientRect()
console.log(divRect.x,divRect.y)
console.log(divRect.right,divRect.bottom)

console.log(divRect.x+div.clientLeft,divRect.y+div.clientTop)
console.log(divRect.x+div.clientLeft+div.clientWidth,divRect.y+div.clientTop+div.clientHeight)