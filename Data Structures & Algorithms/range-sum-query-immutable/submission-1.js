class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.nums = nums;
        const prefixSums = [];
        let sum = 0;
        for (let num of nums) {
            sum+=num;
            prefixSums.push(sum);
        }
        this.prefixSums = prefixSums;
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        return this.prefixSums[right] - (left > 0 ? this.prefixSums[left - 1] : 0);
    }
}
