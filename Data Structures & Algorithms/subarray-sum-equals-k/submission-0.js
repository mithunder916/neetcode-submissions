class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        // Put prefix sums in a hash table with the count of that sum occurring, including 0 (no elements)
        // If prefix[i] - k can be found in table, that's a valid subarray
            // It tells us there's that many subarrays we create that equal k
        
        const table = { 0: 1 };
        let sum = 0;
        let answer = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            const match = sum - k;
            if (table[match] !== undefined) answer += table[match];

            if (table[sum]) {
                table[sum]++;
            } else table[sum] = 1;
        }
    

        return answer;
    }
}
