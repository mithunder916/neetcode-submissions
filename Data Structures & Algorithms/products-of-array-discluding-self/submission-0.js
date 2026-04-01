class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // feels like prefix sum; calculate product of entire list
    // then divide that product by the element to get the answer
    productExceptSelf(nums) {
        let zeroCount = 0;
        const product = nums.reduce((prod, num) => {
            if (num !== 0) return prod * num;
            else {
                zeroCount++;
                return prod;
            }
        }, 1);

        if (zeroCount > 1) return Array(nums.length).fill(0);
        if (zeroCount === 1) return nums.map(num => {
            if (num === 0) return product;
            else return 0;
        });
        return nums.map(num => product / num);
    }
}
