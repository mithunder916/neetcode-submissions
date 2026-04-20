class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // Binary search comparing mid element to last element
            // if mid is greater than last, we're in the rotated part of the array and need to move right to find the non rotated part / min element
            // if mid is lesser, we're in the non-rotated part and could be on minimum. But should try looking left

            let left = 0;
            let right = nums.length - 1;
            let mid;
            let result = 0;

            while (left <= right) {
                mid = Math.floor((left + right) / 2);
                if (nums[mid] <= nums[nums.length - 1]) {
                    // search left
                    result = mid;
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }

            return nums[result];
    }
}
