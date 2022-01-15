// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

// cycle
// function sumTo(n) {
//   let sum =0;
//   for (i=1;i<=n;i++){
//     sum+=i;
//   }
//   return sum;
// }
// recursion
// function sumTo(n){
//   return (n>1)?n+sumTo(n-1):n;
// }
// progression
function sumTo(n){

  return ((2+(n-1))/2)*n;
}

alert( sumTo(100) ); // 5050