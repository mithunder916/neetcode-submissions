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
        let currentSum = 0;
        let found = false;

        function findSum(root, runningSum) {
            if (!root) return 0;
            // reached leaf
            if (!root.left && !root.right) {
                if (root.val + runningSum === targetSum) found = true;
            }
            findSum(root.left, root.val + runningSum)
            findSum(root.right, root.val + runningSum)

        }

        findSum(root, 0);
        return found;
    }
}
