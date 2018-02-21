console.log('Hello from the top');

function helloFromMiddle() {
  console.log('Hello from the middle');
}

setTimeout(helloFromMiddle, 3000);

console.log('Hello from the bottom');
