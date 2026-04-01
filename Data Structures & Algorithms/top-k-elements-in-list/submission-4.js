class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // Calculate counts of each element
    // Use bucket sort to store them by frequency -> [elements]
    // Traverse that array in reverse, only returning k elements
    topKFrequent(nums, k) {
        const counts = new Map();
        
        for (const num of nums) {
            const count = counts.get(num) ? counts.get(num) + 1 : 1;
            counts.set(num, count);
        }

        // bucket sort
        const buckets = [];
        for (const [element, freq] of counts) {
            if (buckets[freq]) buckets[freq].push(element);
            else buckets[freq] = [element];
        }

        // traverse from end
        const answer = [];
        for (let i = buckets.length - 1; i > 0; i--) {
            if (buckets[i]) {
                for (const element of buckets[i]) {
                    answer.push(element);
                    if (answer.length === k) {
                        return answer;
                    }
                }
            }
        }
    }
}
