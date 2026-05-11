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
     * @return {boolean}
     */
    isValidBST(root) {
        // DFS - search children first
        // if null, return true (not violating)
        // let min = 0;
        // let max = Infinity;

        function dfs(root, min, max) {
            const isLeftValid = root.left ? dfs(root.left, min, root.val) : true;
            const isRightValid = root.right ? dfs(root.right, root.val, max) : true;

            return isLeftValid && isRightValid && root.val > min && root.val < max;
        }

        return dfs(root, -Infinity, Infinity)

    }
}
