// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
//recursion
// function printListRev(list) {
  
// if(list.next){
//   printListRev(list.next)
// }
// console.log(list.value);

// }

function printListRev(list) {
  let values = [];
  let qwe = list;

  while (qwe) {
    values.push(qwe.value);
    qwe = qwe.next;
  }

  for (let i = values.length - 1; i >= 0; i--) {
    console.log( values[i] );
  }
}


printListRev(list)