// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.


function fib(n) {
  return (n<=1)?n:fib(n-1)+fib(n-2);


}



alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757