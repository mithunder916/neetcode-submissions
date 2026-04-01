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
        // // avoid sorting for O(n) - keep track of highest k seen so far?
        // const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
        // return sorted.slice(0, k).map(count => count[0]);
        const bucket = [];
        Object.entries(counts).map(([num, count]) => {
            if (bucket[count]) bucket[count].push(num);
            else bucket[count] = [num];
        })

        const answer = [];
        for (let i = bucket.length - 1; i > 0; i--) {
            if (!bucket[i]) continue;
            for (const num of bucket[i]) {
                answer.push(num);
                if (answer.length === k) return answer;
            }
        }
    }
}
