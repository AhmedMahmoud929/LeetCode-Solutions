class Solution {
public:
    int largestPerimeter(vector<int>& nums) {
              sort(nums.begin() , nums.end());
        for(int i = nums.size() - 1 ; i >= 2 ; i--){
            int sum = nums[i] + nums[i - 1] + nums[i - 2];
            if(sum - nums[i] > nums[i]) return sum;
        }
        return 0;
    }
    
};