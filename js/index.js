const listItems =  document.querySelectorAll('li')
console.log(listItems)
for(let li of listItems){
    const count = li.querySelectorAll('li').length
    const text = document.createTextNode(`[${count}]`)

    count>0 && (li.firstChild.after(text))

}