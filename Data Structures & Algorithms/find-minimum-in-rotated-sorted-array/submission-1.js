class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // binary search
        // if mid is greater than rightmost, then lowest is right
        // if mid is lesser than rightmost, then lowest is left

      let left = 0;
      let right = nums.length - 1;

      while (left < right) {
          const mid = Math.floor((left + right) / 2);
          if (nums[mid] < nums[right]) {
              right = mid;
          } else {
              left = mid + 1;
          }
      }
      return nums[left];
    }
}
