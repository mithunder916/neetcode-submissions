class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const cache = new Map();

        function dfs(step) {
            if (step <= 1) return cost[step];
            if (cache.has(step)) return cache.get(step);

            cache.set(step, cost[step] + Math.min(dfs(step - 1), dfs(step - 2)));
            return cache.get(step);
        }

        return Math.min(dfs(cost.length - 1), dfs(cost.length - 2));
    }
}
