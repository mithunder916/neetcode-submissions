class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // make a hash table containing each element
        // then search for each one and go recursively 
        // increasing a count until you run out

        const table = {};
        for (let num of nums) {
            table[num] = true;
        }

        let maxCount = 0;
        for (let num of nums) {
            if (!table[num - 1]) {
                let count = 1;
                let start = num;
                while (table[start + 1]) {
                    count++;
                    start++;
                }
                maxCount = Math.max(maxCount, count);
            } 
        }
        return maxCount;
    }
}
