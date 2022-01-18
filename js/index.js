// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers(from,to) {
  let index = setTimeout(function f() {
    
    alert(from++);
    if (from-1==to){
      clearTimeout(index)
    }else{
      return f()
    }

  },1000)
}
printNumbers(2,5)