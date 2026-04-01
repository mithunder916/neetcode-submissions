class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // 1. Put all nums in a hash map
        // 2. Only check sequence length for start of sequences (!hash[num - 1])
        // Maintain maxCount and running count

        const lookup = {};
        for (const num of nums) {
            lookup[num] = true;
        }

        let maxCount = 0;
        for (const num of nums) {
            if (!lookup[num - 1]) {
                let count = 1;
                let current = num;
                while (lookup[current + 1]) {
                    count++;
                    current++;
                }
                maxCount = Math.max(maxCount, count)
            }
        }

        return maxCount;
    }
}
