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
    postorderTraversal(root) {
        // const results = [];

        // function dfs(node) {
        //     if (!node) return;
        //     dfs(node.left);
        //     dfs(node.right);
        //     results.push(node.val);
        // }

        // dfs(root);
        // return results;

        const stack = [root];
        // track whether you've visited the corresponding node
        // only process nodes that you've visited
        const visit = [false];
        const res = [];

        while (stack.length) {
            const cur = stack.pop();
            const v = visit.pop();

            if (cur) {
                // if you have visited this node, that means its children have been processed
                if (v) {
                    res.push(cur.val);
                } else {
                    // mark parent node visited
                    stack.push(cur);
                    visit.push(true);
                    // add right to stack before left
                    stack.push(cur.right);
                    visit.push(false);
                    // add left to stack last so you process it before right and parent
                    stack.push(cur.left);
                    visit.push(false);
                }
            }
        }

        return res;
    }
}
