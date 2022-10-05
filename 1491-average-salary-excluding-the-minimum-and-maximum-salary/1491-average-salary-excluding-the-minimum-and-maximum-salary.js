var average = function (salary = []) {
  let min = 10e7,
    max = -10e7,
    sum = 0,
    counter = 0;

  salary.map((n) => {
    if (min > n) min = n;
    if (max < n) max = n;
  });

  salary.map((n) => {
    if (n != min && n != max) {
      sum += n;
      counter++;
    }
  });

  return (sum / counter).toFixed(5);
};