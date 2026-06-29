class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // sliding window of variable length
        // store a Map of characters for lookup, pointing to last position found
        // if character is in Map, adjust left bounds of window
        // update max count with each step
        let left = 0;
        let right = 0;
        let positions = new Map();
        let maxLength = 0;

        while (right < s.length) {
            // if new character
            if (positions.has(s[right])) {
                const lastPosition = positions.get(s[right]);
                left = Math.max(lastPosition + 1, left);
            }

            positions.set(s[right], right);
            maxLength = Math.max(maxLength, (right - left) + 1);
            right++;
        }

        return maxLength;
    }
}
