class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // const cache = new Map();

        // function climb(n) {
        //     if (n <= 2) return n;
        //     if (cache.has(n)) return cache.get(n);

        //     cache.set(n, climb(n - 1) + climb(n - 2));

        //     return cache.get(n);
        // }

        // return climb(n)

        // bottom up
        if (n <= 2) return n;
        const dp = [0, 1, 2];
        for (let i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n]
    }
}
