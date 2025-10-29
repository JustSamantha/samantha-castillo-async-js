function helloMiriam() {
  const name = 'Miriam';
  const greeting = `Hello, my name is ${name}!`;
  console.log(greeting);
  // "Hello, my name is Miriam!"
}

function helloMiriamWithFunc() {
  function makeGreeting(name) {
    return `Hello, my name is ${name}!`;
  }

  const name = 'Miriam';
  const greeting = makeGreeting(name);
  console.log(greeting);
  // "Hello, my name is Miriam!"
}

// helloMiriam();
helloMiriamWithFunc();
