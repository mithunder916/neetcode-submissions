class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // stack: place lowest number seen on top of stack
        // if current number is great, calculate diff and update max diff
        let maxProfit = 0;
        let lowestSeen;

        for (let price of prices) {
            if (lowestSeen === undefined || price < lowestSeen) {
                lowestSeen = price;
            } else {
                const diff = price - lowestSeen;
                maxProfit = Math.max(maxProfit, diff)
            }
        }
        return maxProfit;
    }
    // maxProfit(prices) {
    //     // stack: place lowest number seen on top of stack
    //     // if current number is great, calculate diff and update max diff
    //     let maxProfit = 0;
    //     const stack = [];

    //     for (let price of prices) {
    //         if (stack.length === 0 || price < stack[stack.length - 1]) {
    //             stack.push(price);
    //         } else {
    //             const diff = price - stack[stack.length - 1];
    //             maxProfit = Math.max(maxProfit, diff)
    //         }
    //     }
    //     return maxProfit;
    // }
}
