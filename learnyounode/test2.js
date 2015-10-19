var a = 0;

function foo() 
{
  var location = 'location';
  console.log(location); // вернет 'location'
  console.log(window.location); // вернет window.location
  window.a = 'переменная из функции';
}


console.log(a); // undefined
foo();
console.log(a); // переменная из функции