// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        // create map of original nodes pointing to new nodes (which we create)
        // do another pass through the original and assign the next and random pointers using the map

        if (!head) return null;
        const oldToCopy = new Map();
        let current = head;

        while (current) {
            const copy = new Node(current.val);
            oldToCopy.set(current, copy);
            current = current.next;
        }

        current = head;
        while (current) {
            const copy = oldToCopy.get(current);
            copy.next = oldToCopy.get(current.next) || null;
            copy.random = oldToCopy.get(current.random) || null;
            current = current.next;
        }

        return oldToCopy.get(head);
    }
}
