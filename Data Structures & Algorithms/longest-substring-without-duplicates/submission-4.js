class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // sliding window, variable size
        // use a map to store unique character and position (index). also store max size 
            // store index seen and update pointer to that
        // store a left pointer and use that to calculate max, not map size
        const positions = new Map();
        let maxSize = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            const currentChar = s[right];
            // if character is new to substring
            if (!positions.has(currentChar)) {
                positions.set(currentChar, right);
                maxSize = Math.max(maxSize, right - left + 1);
            } else {
                // jump window left bounds one ahead of duplicate's position
                // OR keep at left if it's already greater than that from accounting for a different duplicate
                left = Math.max(left, positions.get(currentChar) + 1);
                // update positions to new one
                positions.set(currentChar, right);
                maxSize = Math.max(maxSize, right - left + 1);
            }
        }
        return maxSize;
    }
    // lengthOfLongestSubstring(s) {
    //     // sliding window, variable size
    //     // use a set to store unique character. also store max size 
    //         // when a duplicate is found, shrink window by removing until match is found
    //             // could we also store index seen and update pointer to that
        
    //     const seen = new Set();
    //     let maxSize = 0;

    //     for (let idx = 0; idx < s.length; idx++) {
    //         // if character is new to substring
    //         if (!seen.has(s[idx])) {
    //             seen.add(s[idx]);
    //             maxSize = Math.max(maxSize, seen.size);
    //         } else {
    //             // move index forward until duplicate has been removed
    //             while (seen.has(s[idx])) {
    //                 // remove element on left, now out of bounds
    //                 const bounds = idx - seen.size;
    //                 seen.delete(s[bounds]);
    //             }
    //             // once previous duplicate removed, add the char
    //             seen.add(s[idx]);
    //         }
    //     }
    //     return maxSize;
    // }
}
