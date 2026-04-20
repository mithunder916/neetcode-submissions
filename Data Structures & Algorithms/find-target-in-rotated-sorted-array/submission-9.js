class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let mid;

        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            if (target === nums[mid]) return mid;
            if (nums[left] <= nums[mid]) {
                // left side is sorted
                if (nums[left] <= target && target < nums[mid]) {
                    // target is within this left sorted half
                    right = mid - 1;
                } else {
                    // target is greater than the midpoint, so search the right (unsorted half)
                    left = mid + 1;
                }
            } else {
                // right side is sorted
                if (nums[mid] < target && target <= nums[right]) {
                    // target is within this right sorted half
                    left = mid + 1;
                } else {
                    // target is smaller than midpoint, search the left unsorted half
                    right = mid - 1;
                }
            }
        }
        return -1;
    }

        // 1. Find minimum: compare to last element
    //     let left = 0;
    //     let right = nums.length - 1;
    //     let mid;
    //     let min = 0;

    //     while (left <= right) {
    //         mid = Math.floor((left + right) / 2);
    //         if (nums[mid] <= nums[nums.length - 1]) {
    //             // search left to find minimum
    //             min = mid;
    //             right = mid - 1;
    //         } else {
    //             // in rotated section, search right
    //             left = mid + 1;
    //         }
    //     }

    //     console.log('min', min)

    //     // 2. Run two binary searches on each side; min is the lowest num's index
    //     function binarySearch(left, right, target) {
    //         let mid;

    //         while (left <= right) {
    //             mid = Math.floor((left + right) / 2);
    //             if (target === nums[mid]) return mid;
    //             else if (target < nums[mid]) {
    //                 right = mid - 1;
    //             } else {
    //                 left = mid + 1;
    //             }
    //         }
    //         return -1;
    //     }

    //     // if target is between min and last element, search right
    //     // if target is between first element and min, search left

    //     if (target >= nums[min] && target <= nums[nums.length - 1]) {
    //         // search right
    //         return binarySearch(min, nums.length - 1, target);
    //     } else {
    //         // search left
    //         return binarySearch(0, Math.max(0, min - 1), target);
    //     }
    // }
}
