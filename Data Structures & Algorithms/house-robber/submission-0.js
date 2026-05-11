class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const cache = new Map();
        function dfs(num) {
            if (num >= nums.length) return 0;
            if (cache.has(num)) return cache.get(num);

            cache.set(num, Math.max(nums[num] + dfs(num + 2), dfs(num + 1)));

            return cache.get(num);
        }

        return dfs(0)
    }
}
