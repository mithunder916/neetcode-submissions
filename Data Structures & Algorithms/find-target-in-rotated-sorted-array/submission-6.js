class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // 1. Find minimum: compare to last element
        let left = 0;
        let right = nums.length - 1;
        let mid;
        let min = 0;

        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            if (nums[mid] <= nums[nums.length - 1]) {
                // search left to find minimum
                min = mid;
                right = mid - 1;
            } else {
                // in rotated section, search right
                left = mid + 1;
            }
        }

        console.log('min', min)

        // 2. Run two binary searches on each side; min is the lowest num's index
        function binarySearch(left, right, target) {
            let mid;

            while (left <= right) {
                mid = Math.floor((left + right) / 2);
                if (target === nums[mid]) return mid;
                else if (target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            return -1;
        }

        const leftResult = binarySearch(0, Math.max(0, min - 1), target);
        const rightResult = binarySearch(min, nums.length - 1, target);

        console.log(leftResult, rightResult)

        return Math.max(leftResult, rightResult);
    }
}
