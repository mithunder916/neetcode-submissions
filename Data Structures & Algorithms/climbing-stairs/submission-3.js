class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 3) return n;
        const dp = [2, 3];
        let i = 4;

        while (i <= n) {
            let temp = dp[1];
            dp[1] = dp[0] + temp;
            dp[0] = temp;
            i++;
        }

        return dp[1];
    }
}
