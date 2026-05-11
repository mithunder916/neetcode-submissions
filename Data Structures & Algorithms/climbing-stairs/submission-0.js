class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const cache = new Map();

        function climb(n) {
            if (n <= 2) return n;
            if (cache.get(n)) return cache.get(n);

            cache.set(n, climb(n - 1) + climb(n - 2));

            return cache.get(n);
        }

        return climb(n)
    }
}
