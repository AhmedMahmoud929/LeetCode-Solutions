function canMakeArithmeticProgression(arr = []) {
  arr.sort((a, b) => a - b);
  let valid = true;
  for (let i = 0; i < arr.length-2; i++) {
    if(arr[i+1]-arr[i]!=arr[i+2]-arr[i+1]){
      valid=false;
      break;
    }
  }
  return valid;
}