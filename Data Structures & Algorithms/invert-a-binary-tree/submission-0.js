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
     * @return {TreeNode}
     */
    invertTree(root) {
        // swap left and right for each node that has it

        function dfsSwap(node) {
            if (!node) return;
            dfsSwap(node.left);
            dfsSwap(node.right);
            let temp = node.left;
            node.left = node.right;
            node.right = temp;
        }

        dfsSwap(root);
        return root;
    }
}
