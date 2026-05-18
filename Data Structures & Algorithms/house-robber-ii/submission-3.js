class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // twist is we can't rob the last and first house (nums[0] and nums[nums.length - 1])
        // two pass solution: run from 0 -> n - 2 and 1 -> n - 1
            // then return the greater of the last value of each

        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1])

        const tryFirst = [nums[0]];
        tryFirst[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < nums.length - 1; i++) {
            tryFirst[i] = Math.max(nums[i] + tryFirst[i - 2], tryFirst[i - 1]);
        }

        const tryLast = [nums[1]];
        tryLast[1] = Math.max(nums[1], nums[2]);

        for (let i = 2; i < nums.length - 1; i++) {
            tryLast[i] = Math.max(nums[i + 1] + tryLast[i - 2], tryLast[i - 1]);
        }

        console.log(tryFirst, tryLast)

        return Math.max(tryFirst[tryFirst.length - 1], tryLast[tryLast.length - 1]);
    }
}
