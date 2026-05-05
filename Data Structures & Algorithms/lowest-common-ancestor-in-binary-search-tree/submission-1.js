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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        // let lca = root;
        // // root.val is always a potential answer
        // // check if p and q are children OR values of each child
        //     // exit if we reach a node that is not a parent
        //     // update lca if another is found

        // // helper to find if node is contained within parent
        // function containsNode(root, node) {
        //     if (!root) return false;
        //     if (root.val === node.val) return true;
        //     return containsNode(root.left, node) || containsNode(root.right, node);
        // }

        // // call helper on children. If true, update lca and recursively call on children
        // function dfs(root) {
        //     if (!root) return;
        //     if (containsNode(root, p) && containsNode(root, q)) {
        //         lca = root;
        //         dfs(root.left);
        //         dfs(root.right);
        //     }
        // }

        // dfs(root);
        // return lca;

        if (!root || !p || !q) {
            return null;
        }
        if (Math.max(p.val, q.val) < root.val) {
            return this.lowestCommonAncestor(root.left, p, q);
        } else if (Math.min(p.val, q.val) > root.val) {
            return this.lowestCommonAncestor(root.right, p, q);
        } else {
            return root;
        }
    }
}
