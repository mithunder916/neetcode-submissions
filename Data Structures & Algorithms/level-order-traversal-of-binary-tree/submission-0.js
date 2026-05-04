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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];
        // BFS - use a queue, putting all nodes of a level into a queue and processing a queue fully
        const queue = [root];
        let result = [];
        let pointerIndex = 0;

        while (queue.length > pointerIndex) {
            const levelSize = queue.length - pointerIndex;
            const level = [];
            
            for (let i = 0; i < levelSize; i++) {
                const node = queue[pointerIndex];
                level.push(node.val);
                pointerIndex++;

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }

            result.push(level);
        }

        return result;
    }
    
}
