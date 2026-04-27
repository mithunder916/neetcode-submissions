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
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return head;

        // find middle using two pointers
        let fast = head;
        let slow = head;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        // slow is now middle
        let reverse = slow.next;
        slow.next = null;
        let prev = null;

        // reverse second list
        while (reverse) {
            let next = reverse.next;
            reverse.next = prev;
            prev = reverse;
            reverse = next;
        }

        // merge two, add head nodes, then reverse
        let list1 = head;
        let list2 = prev;
        while (list2) {
            let next1 = list1.next;
            let next2 = list2.next;

            list1.next = list2;
            list2.next = next1;

            list1 = next1;
            list2 = next2;
        }

        return head;

    }
}
