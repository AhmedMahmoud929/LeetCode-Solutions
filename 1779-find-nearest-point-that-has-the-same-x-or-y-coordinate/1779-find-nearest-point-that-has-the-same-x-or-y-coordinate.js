function nearestValidPoint(x, y, points) {
  // ========================
  function distance(arr1, arr2) {
    let result = Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
    return result;
  }
  // ========================

  let validTest = false;
  let smallestNum = 99999999;
  let validIndex;
  let smallestIndex= 99999999;
  for (let i = 0; i < points.length; i++) {
    if (points[i][0] == x || points[i][1] == y) {
      let temp = distance([x, y], points[i]);
      validTest = true;
      // get smallest distance
      if (smallestNum==temp) {
        if (smallestIndex>i){
          smallestIndex=i;
        }
      }
      if (smallestNum>temp) {
        smallestNum=temp;
        validIndex=i;
      }
    }
  }
  if (validTest==false){
    return(-1);
  }
  else{
    return(validIndex);
  }
}