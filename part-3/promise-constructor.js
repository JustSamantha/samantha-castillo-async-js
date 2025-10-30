// function alarm(name, ms) {
//   return new Promise((resolve, reject) => {
//     if (ms < 0) {
//       return reject(new Error('Time cannot be negative'));
//     }
//     setTimeout(() => {
//       return resolve(`Wake up ${name}!`);
//     }, ms);
//   });
// }

// alarm('Samantha', 5000)
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

const name = document.querySelector('#name');
const delay = document.querySelector('#delay');
const button = document.querySelector('#set-alarm');
const output = document.querySelector('#output');

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject(new Error('Alarm delay must not be negative'));
      return;
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener('click', () => {
  alarm(name.value, delay.value)
    .then((message) => (output.textContent = message))
    .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
});
