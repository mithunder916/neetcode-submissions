class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // do one binary search to find the lowest number
        // if target is greater than that number, do another search on the right
            // if lesser, do another search on the left

        let left = 0;
        let right = nums.length - 1;
        let mid;

        while (left < right) {
            mid = Math.floor((left + right) / 2);
            if (nums[mid] < nums[right]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        console.log('left', left)

        // left is now the lowest number
        if (target === nums[left]) return left;
        else if (target > nums[nums.length - 1]) {
            // target is in the left sorted half
            right = left - 1;
            left = 0;
        } else {
            // target is in the right sorted half
            right = nums.length - 1;
        }

        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            console.log(mid, target)
            if (nums[mid] === target) return mid;
            else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
}
