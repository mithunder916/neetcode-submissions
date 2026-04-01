class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // Sort, then do two pointers for each number (O n^2)
        // Skip duplicates; they will be adjacent
        nums.sort((a, b) => a - b);
        const answers = [];
        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let left = i + 1;
            let right = nums.length - 1;
            let sum;

            while (left < right) {
                sum = nums[i] + nums[left] + nums[right];
                if (sum === 0) {
                    answers.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    // must avoid duplicates
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++
                    }
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return answers;
    }
}
