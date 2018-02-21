console.log('hello from the top');

let data = null;

setTimeout(function() {
  console.log('hello from the middle');
  data = 42;
  console.log(data);
}, 0);

console.log(data);

console.log('hello from the bottom');
