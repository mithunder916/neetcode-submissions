class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // start with two pointers
        // compare sum of numbers with target
            // if sum is less, increment left pointer
            // if greater, decrement right pointer
        // return indices

        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const sum = numbers[left] + numbers[right];
            if (sum === target) return [left + 1, right + 1];
            else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        return null;
    }
}
