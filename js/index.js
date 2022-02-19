// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.
//
//     Например:

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
}
// Синтаксис:

let container = document.getElementById('container');

const createTree = (cont, obj) => {

    const unorderedList = document.createElement('ul')
    cont.append(unorderedList)

    for (let key in obj) {
        let listItem = document.createElement('li')
        listItem.textContent = key
        unorderedList.append(listItem)
        Object.keys(obj[key]).length>0 && createTree(listItem,obj[key])
    }

}

createTree(container, data); // создаёт дерево в контейнере