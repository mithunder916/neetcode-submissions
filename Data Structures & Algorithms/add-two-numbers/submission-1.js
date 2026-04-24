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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        // while both lists have nodes, traverse and create new sum nodes, appending to the last
        // create new list with dummy node, can return .next
        const sumListHead = new ListNode();
        let sumList = sumListHead;
        let carry = 0;

        while (l1 || l2 || carry) {
            // if one list ends early, don't exit loop, just add to zero and until both are finished
            const val1 = l1 ? l1.val : 0;
            const val2 = l2 ? l2.val : 0;
            const sum = val1 + val2 + carry;
            // update carry to tens digit (can be 0)
            carry = Math.floor(sum / 10);

            // set new node as ones digit
            let sumNode = new ListNode(sum % 10);
            sumList.next = sumNode;

            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
            sumList = sumList.next;
        }

        return sumListHead.next;
    }
}