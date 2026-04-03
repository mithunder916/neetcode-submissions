class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // sort array, then run two pointer scan for each element
        // skip duplicates, both for current first element, and if a triplet is found
        nums.sort((a, b) => a - b);
        const results = [];
        
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let left = i + 1;
            let right = nums.length - 1;
            let target = 0 - nums[i];

            // two sum scan
            while (left < right) {
                let sum = nums[left] + nums[right];
                if (sum === target) {
                    results.push([nums[i], nums[left], nums[right]]);
                    // skip duplicates
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return results;
    }
}
