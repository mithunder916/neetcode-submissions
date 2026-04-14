class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        // variable size window
        // expand right until sum reaches target
        // once target is reached, shrink by removing elements from the left WHILE target is still reached?
        // track running sum, min size, left and right pointers
        let currentSum = 0;
        let minSize = 0;
        let left = 0;

        for (let right = 0; right < nums.length; right++) {
            currentSum += nums[right];

            while (currentSum >= target) {
                // if first solution, set minSize. Otherwise only update if smaller
                minSize = minSize === 0 ? (right - left) + 1 : Math.min(minSize, (right - left) + 1);

                // shrink window from left
                currentSum -= nums[left];
                left++;
            }
        }
        return minSize;
    }
}
