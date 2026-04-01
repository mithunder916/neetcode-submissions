class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // store in buckets of frequency -> number
        const buckets = [];
        const freqCount = {};

        // store frequency counts
        for (const num of nums) {
            freqCount[num] = freqCount[num] ? freqCount[num] + 1 : 1;
        }
        
        // bucket sort
        for (const [num, freq] of Object.entries(freqCount)) {
            buckets[freq] = buckets[freq] ? [...buckets[freq], num] : [num];
        }

        // reverse loop
        const answer = [];
        for (let i = nums.length; i > -1; i--) {
            if (!buckets[i]) continue;
            for (let num of buckets[i]) {
                answer.push(num);
                if (answer.length === k) return answer;
            }
        }
        return answer;
    }
}
