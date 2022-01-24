// Давайте создадим новый объект rabbit:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");
// Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi(); //rabbit.name
Rabbit.prototype.sayHi(); // alert undefined
Object.getPrototypeOf(rabbit).sayHi();  //alert undefined
rabbit.__proto__.sayHi(); // alert undefined