var a;

function foo() {
  var a = 2;
  b = 3;
  return a+b;
}
console.log(a); // undefined
a = 'очень важное значение';
console.log(a); // очень важное значение
console.log(foo());
console.log(a); // очень важное значение