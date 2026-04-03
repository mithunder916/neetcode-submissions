class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */

    rotate(nums, k) {
        k = k % nums.length;
        reverse(nums, 0, nums.length - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, nums.length - 1);

        function reverse(nums, l, r) {
            while (l < r) {
                [nums[l], nums[r]] = [nums[r], nums[l]];
                l++;
                r--;
            }
        }
    }
}
    // rotate(nums, k) {
    //     // new index: i + k; when i + k > nums.length - 1, do % nums.length
    //     // how to move values cleanly without overwriting?
    //     const n = nums.length;
    //     k %= n;
    //     let count = 0;

    //     // repeat n times; move n elements (everything in array)
    //     for (let start = 0; count < n; start++) {
    //         // move first element first
    //         let prev = nums[start];
    //         // index to move to
    //         let current = (start + k) % n;

            
    //         while (current !== start) {
    //             // store element about to be displaced
    //             const temp = nums[current];
    //             // replace previous element
    //             nums[current] = prev;
    //             prev = temp;
    //             // update next position to move
    //             current = (current + k) % n;
    //             // increment count
    //             count++;
    //         }
    //         // place the last displaced element back at start
    //         nums[start] = prev;
    //         count++;
    //     }
    // }
