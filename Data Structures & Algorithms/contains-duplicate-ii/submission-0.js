class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        // sliding fixed window (of length k + 1)
        // use hash set to store values in window
            // when sliding, remove element at i - k + 1
            // if duplicate found, return true early
        const seen = new Set();
        for (let idx = 0; idx < nums.length; idx++) {
            if (idx >= k + 1) {
                const remove = nums[idx - (k + 1)]
                seen.delete(remove);
            }
            if (seen.has(nums[idx])) return true;
            seen.add(nums[idx]);
        }
        return false;
    }
}
