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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // need to delete node at length - n position, then return head
        // traverse once to count number of nodes
        let length = 0;
        let current = head;
        while (current) {
            length++;
            current = current.next;
        }

        // e.g. 0 means first node, 2 means third node
        // get reference to previous node
        // TODO: handle edge case of deleting first node
        let prevPosition = length - n - 1;

        if (prevPosition < 0) {
            return head.next ?? null;
        }

        let prevNode = head;
        while (prevPosition > 0) {
            prevNode = prevNode.next;
            prevPosition--;
        }

        prevNode.next = prevNode.next.next;
        return head;
    }
}
