// code runner  : control + option + N

const arr = [1, 2, 3];

arr.forEach(console.log);

function calculate(callback) {
  console.log('calculating');
  setTimeout(() => {
    let result = 0;
    for (let i = 1; i < 10; i++) {
      result += i;
    }
    callback(result);
  }, 0);
}

function hello() {
  console.log('hello');
}

calculate(result => {
  console.log(`9! = ${result}`);
});
hello();
