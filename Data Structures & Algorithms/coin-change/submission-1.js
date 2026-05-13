class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
    // need to track running sum
    // no point in adding a coin if sum would exceed target

    // dp represent the min # of coins required to create each amount
    const dp = new Array(amount + 1).fill(Infinity);
    // takes 0 coins to reach amount of 0
    dp[0] = 0;

    for (let a = 1; a <= amount; a++) {
        for (const c of coins) {
            // if the coin is greater than the amount, it can't be used
            if (c <= a) {
                // dp[a] will be Infinity until we find a solution; after, it may be overwritten by a better solution
                // we add + 1 to account for the current coin
                dp[a] = Math.min(dp[a], dp[a - c] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
    }
}
