class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = []
        const suffix = []
        let product = 1;

        for (let num of nums) {
            product *= num;
            prefix.push(product);
        }

        product = 1;
        for (let i = nums.length - 1; i > -1; i--) {
            product *= nums[i];
            suffix[i] = product;
        }

        const output = [];
        for (let j = 0; j < nums.length; j++) {
            // multiply prefix to the left with suffix to the right
            const left = j > 0 ? prefix[j - 1] : 1;
            const right = j < nums.length - 1 ? suffix[j + 1] : 1;
            output.push(left * right);
        }

        return output;
    }
}
