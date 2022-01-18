function sum(a) {
  
  let curSum = a;

  function add(b){
    curSum +=b;
    return add;
  }

  add.toString = function() {
    return curSum;
  };

  return add;

}








alert(sum(1)(2)); // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15