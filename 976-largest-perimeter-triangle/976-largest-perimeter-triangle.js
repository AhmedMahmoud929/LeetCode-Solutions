function largestPerimeter(nums = []) {
  nums.sort((a, b) => a - b);
  let valid = [];
  // Get All The Valid
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] + nums[i + 1] > nums[i + 2])
      valid.push(nums[i] + nums[i + 1] + nums[i + 2]);
  }
  return valid.length ? valid[valid.length - 1] : 0;
}