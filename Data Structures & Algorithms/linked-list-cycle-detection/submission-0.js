/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        // create slow and fast pointers
        // increment fast pointer - if it hits null return false
            // if it equals slow pointer return true
        // when to increment slow pointer? when it merges with fast?
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;

            if (fast === slow) {
                return true;
            }
        }
        return false;
    }
}
