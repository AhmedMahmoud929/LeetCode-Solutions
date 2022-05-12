var checkStraightLine = function (coordinates) {
  let counter = 0;
  for (let i = 0; i < coordinates.length - 1; i++) {
    if (coordinates[i][0] == coordinates[i + 1][0]) counter++;
  }
  if (counter == coordinates.length - 1) {
    return true;
  } else {
    // ===================================
    let slope = ([x1, y1], [x2, y2]) => {
      let result = (y2 - y1) / (x2 - x1);
      return result;
    };
    // ===================================
    let straight = true;
    let testSlope = slope(coordinates[0], coordinates[1]);
    for (let i = 0; i < coordinates.length - 1; i++) {
      let slopeOfPoint = slope(coordinates[i], coordinates[i + 1]); // => i=4,5 ==> (7-6)/(7-5)
      if (slopeOfPoint != testSlope) straight = false;
    }
    return straight;
  }
};