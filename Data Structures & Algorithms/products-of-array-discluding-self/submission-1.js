class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // calculate prefix product and post fix product
        // output array contains prefix[i - 1] * postfix[i + 1]
            // multiplying all numbers other than the current one
        const prefix = [];
        const suffix = [];
        let product = 1;
        for (let i = 0; i < nums.length; i++) {
            product *= nums[i];
            prefix.push(product);
        }
        
        product = 1;
        for (let i = nums.length - 1; i > -1; i--) {
            product *= nums[i];
            suffix[i] = product;
        }

        console.log(prefix, suffix)

        return nums.map((_, idx) => {
            let left = idx > 0 ? prefix[idx - 1] : 1;
            let right = idx + 1 > nums.length - 1 ? 1 : suffix[idx + 1];
            return left * right;
        })
    }
}
