class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // sliding window, variable length
        // use a Map to track seen characters and positions
        // expand while seeing new characters
        // contract when you find a duplicate
        // update max length seen (window size)
        const seen = new Map();
        let maxLength = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            // check if duplicate
            if (seen.has(s[right])) {
                // adjust left position
                const lastPosition = seen.get(s[right]);
                left = Math.max(left, lastPosition + 1);
            }
            // update seen
            seen.set(s[right], right);
            maxLength = Math.max(maxLength, (right - left) + 1);
        }

        return maxLength;
    }
}
