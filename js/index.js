// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

// Например, должно работать так:
Function.prototype.defer = function(ms){
  let contf = this;
  return function(...rest){
      setTimeout(
        ()=>contf.apply(this,rest),ms
      )
  }
  }


function f(a, b) {
  alert( a + b );
}

f.defer(5000)(4, 5); // выведет 3 через 1 секунду.
// Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.

