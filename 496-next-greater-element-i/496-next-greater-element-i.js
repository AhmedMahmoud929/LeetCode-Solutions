var nextGreaterElement = function (nums1 = [], nums2 = []) {
  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        let valid = false;
        for (let k = j; k < nums2.length; k++) {
          if (nums2[k] > nums2[j]) {
            arr.push(nums2[k]);
            valid = true;
            break;
          }
        }
        if (!valid) arr.push(-1);
      }
    }
  }
  return arr;
};