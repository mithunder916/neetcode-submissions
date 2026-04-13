class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // sliding window, variable size
        // use a set to store unique character. also store max size 
            // when a duplicate is found, shrink window by removing until match is found
                // could we also store index seen and update pointer to that
        
        const seen = new Set();
        let maxSize = 0;

        for (let idx = 0; idx < s.length; idx++) {
            // if character is new to substring
            if (!seen.has(s[idx])) {
                seen.add(s[idx]);
                maxSize = Math.max(maxSize, seen.size);
            } else {
                // move index forward until duplicate has been removed
                while (seen.has(s[idx])) {
                    // remove element on left, now out of bounds
                    const bounds = idx - seen.size;
                    seen.delete(s[bounds]);
                }
                // once previous duplicate removed, add the char
                seen.add(s[idx]);
            }
        }
        return maxSize;
    }
}
