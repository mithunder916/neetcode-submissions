class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // two pointers. Calculate sum and compare to target
        // If sum is too large, decrement right. If too small, increment left
        // 1-indexed: return [left + 1, right + 1]

        let left = 0;
        let right = numbers.length + 1;
        let sum;

        while (left < right) {
            sum = numbers[left] + numbers[right];
            if (sum === target) return [left + 1, right + 1];
            else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
}
