class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Create a hash map of counts
        // Sort the values
        // Return the top k entries
        const counts = {};
        for (let num of nums) {
            const count = counts[num] ? counts[num] + 1 : 1;
            counts[num] = count;
        }
        const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
        return sorted.slice(0, k).map(count => count[0]);
    }
}
