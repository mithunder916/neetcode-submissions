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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        // pass running sum to each child
        // if we hit a leaf AND the node.val + running sum = targetSum, return true;
        // if (!root) return 0;
        function pathSum(root, currentSum) {
            if (!root) return false;
            if (!root.left && !root.right) {
                if ((root.val + currentSum) === targetSum) return true;
                return false;
            }
            return pathSum(root.left, currentSum + root.val) || pathSum(root.right, currentSum + root.val);
        }

        return pathSum(root, 0);
    }
}
