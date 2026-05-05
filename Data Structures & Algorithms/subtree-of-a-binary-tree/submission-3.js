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
        // create helper function to check if two trees are the same
        // call this recursively on all children of root

        function isSameTree(tree1, tree2) {
            // if BOTH trees hit a dead end, they are currently matching
            if (!tree1 && !tree2) return true;
            // if nodes match, check ALL children
            if (tree1 && tree2 && tree1.val === tree2.val) {
                return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
            }
            return false;
        }
        
        if (!subRoot) return true;
        if (!root) return false;
        // if identical trees are found at any child of root, return true
        return isSameTree(root, subRoot) || this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
}
