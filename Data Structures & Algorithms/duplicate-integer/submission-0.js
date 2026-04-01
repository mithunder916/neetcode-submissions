class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        for (let n of nums) {
            if (map.get(n)) return true;
            else map.set(n, 1);
        }
        return false;
    }
}
