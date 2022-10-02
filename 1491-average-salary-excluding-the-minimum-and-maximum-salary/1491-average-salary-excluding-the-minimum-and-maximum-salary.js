var average = function (salary) {
  let min = salary[0], max = salary[0], sum = 0, count = 0;

  // Get Min & Max
  salary.forEach((n) => {
    min = min > n ? n : min;
    max = max < n ? n : max;
  });
  // Get The AVG
  salary.forEach((n) => {
    if (n !== min && n !== max) {
      sum += n;
      count++;
    }
  });

  return (sum / count).toFixed(5);
};