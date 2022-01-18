// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers(from,to) {
  let index = setInterval(function AlertIt(){
    alert(from);
      
    if(from==to) 
      clearInterval(index);
      from++;
  },2000)
}
printNumbers(2,5)