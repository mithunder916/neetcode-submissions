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
     * @return {number[]}
     */
    preorderTraversal(root) {
        // const results = [];

        // function preorder(node) {
        //     if (!node) return;
        //     results.push(node.val);
        //     preorder(node.left);
        //     preorder(node.right);
        // }

        // preorder(root);
        // return results;

        const stack = [];
        const results = [];
        let current = root;

        while (current || stack.length > 0) {
            if (current) {
                results.push(current.val)
                if (current.right) stack.push(current.right);
                current = current.left;
            } else {
                current = stack.pop();
            }
        }

        return results;
    }
}
