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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        // traverse subRoot and collect values
        // traverse root looking for a value that matches subRoot root node
            // if found, traverse looking for an exact match. Return true if so
            // if not found, skip

        function isSameTree(tree1, tree2) {
            if (!tree1 && !tree2) return true;
            if (tree1 && tree2 && tree1.val === tree2.val) {
                return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
            }
            return false;
        }
        
        if (!subRoot) return true;
        if (!root) return false;
        return isSameTree(root, subRoot) || this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);

    }
}
