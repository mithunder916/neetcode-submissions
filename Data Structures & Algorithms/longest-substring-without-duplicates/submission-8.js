class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // sliding window variable size
        // use a hash table to store characters and their index
            // if already in the table, jump left pointer ahead of last occurrence. then update occurrence
        // maintain left and right pointers and maxLength
        const positions = {};
        let maxLength = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            if (positions[char] !== undefined) {
                // move forward and update
                left = Math.max(left, positions[char] + 1);
            }
                // if new character, update position
                positions[char] = right;
                maxLength = Math.max(maxLength, right - left + 1);
            
        }
        return maxLength;
    }
}
