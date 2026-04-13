class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const table = {};
        for (let num of nums) {
            if (table[num] !== undefined) return true;
            else {
                table[num] = true;
            }
        }
        return false;
    }
}
