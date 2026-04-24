class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // no sorting or hash map allowed
        // n = array length - 1, all elements are between 1 and n

        // linked list where each value points to another index
            // so nums[1] = 2 means nums[1].next = nums[2]
        // look for a cycle - one node will have two nodes pointing to it; we should return that node

        let slow = 0;
        let fast = 0;

        while (true) {
            slow = nums[slow];
            fast = nums[nums[fast]];
            if (slow === fast) {
                break;
            }
        }

        let slow2 = 0;
        while (true) {
            slow = nums[slow];
            slow2 = nums[slow2];
            if (slow === slow2) {
                return slow2
            }
        }
    }
}
