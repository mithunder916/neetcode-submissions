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

        function findSum(root, runningSum) {
            if (!root) return false;
            // reached leaf
            if (!root.left && !root.right) {
                return root.val + runningSum === targetSum;
            }
            return findSum(root.left, root.val + runningSum) || findSum(root.right, root.val + runningSum)

        }

        return findSum(root, 0);
    }
}
