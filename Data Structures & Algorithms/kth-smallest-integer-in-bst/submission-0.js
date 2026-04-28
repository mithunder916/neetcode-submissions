/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        // inorder traversal will traverse nodes in ascending order for a BST
        // count down from k and when it hits 0 return that value
        let value = null;

        function inorder(node) {
            if (!node || k <= 0) return;
            inorder(node.left);
            k--;
            if (k === 0) value = node.val;
            inorder(node.right);
        }

        inorder(root);
        return value;
    }
}
