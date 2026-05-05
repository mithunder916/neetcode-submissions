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
    rightSideView(root) {
        if (!root) return [];
        // BFS to collect values, then return last value in each level

        const queue = [root];
        const values = [];

        while (queue.length) {
            let level = [];
            let size = queue.length;

            for (let i = 0; i < size; i++) {
                const node = queue.shift();
                level.push(node.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right)
            }

            values.push(level);
        }

        // return rightmost values of each level
        return values.reduce((acc, curr) => {
            acc.push(curr[curr.length - 1]);
            return acc;
        }, [])
    }
}
