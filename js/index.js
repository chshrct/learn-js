const liElems = document.body.querySelectorAll('li');

for (li of liElems) {
    console.log(li.firstChild.data)
}