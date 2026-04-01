class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // calculate difference between target and num
        // store diff: index in a hash table
        // if diff found, return both indices
        const table = {};
        for (let i = 0; i < nums.length; i++) {
            if (table[nums[i]] !== undefined) {
                return [table[nums[i]], i];
            }
            const diff = target - nums[i];
            table[diff] = i
        }
    }
}
