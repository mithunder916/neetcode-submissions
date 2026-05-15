class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        // bottom up - calculate min for each amount leading up to the target
        // top down 
        const dp = new Array(amount + 1).fill(Infinity);
        dp[0] = 0;

        for (let i = 1; i <= amount; i++) {
            for (const coin of coins) {
                if (coin <= i) dp[i] = Math.min(dp[i], 1 + dp[i - coin])
            }
        }

        return dp[amount] === Infinity ? -1 : dp[amount];

    }
}
