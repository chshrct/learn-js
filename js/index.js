const names = document.querySelectorAll('td:first-child')
const namesArr = Array.from(names)

namesArr.sort((a, b) =>a.innerHTML.localeCompare(b.innerHTML))
let randomArr = []
namesArr.forEach(e=>randomArr.push(e.innerHTML))
let i = 0;
for (let name of names){
    name.innerHTML = randomArr[i]
    i++
}