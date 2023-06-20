function double(number, callback) {
  setTimeout(() => {
    if (!callback) return;
    const result = number * 2;
    console.log(`${number} * 2 = ${result}`);
    callback(number * 2);
    console.log(`${number} * 2 = ${result}`);
    callback(number * 2);
  }, 500);
}

double(1, result => {
  double(result, result => {
    double(result, result => {
      double(result, result => {
        console.log(`최종결과는 ${result}입니다.`);
      });
    });
  });
});

console.log('------------------------');

function double1(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number !== 'number') {
        reject(new Error('Parameter is not a valid,'));
        return;
      }
      const result = number * 2;
      console.log(`${number} * 2=${number}`);
      resolve(result);
    }, 500);
  });
  return promise;
}

double1(1).then(result => {
  console.log('resolved: ', result);
});
