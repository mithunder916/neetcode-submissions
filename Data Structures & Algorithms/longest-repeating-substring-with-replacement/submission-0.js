class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // sliding window variable size
        // window size = unique characters + Math.max(replacements, k)
        // shrink window when: more than k unique characters have been found
        // need to track most common character, replacements should be on top of that one
        const freq = new Map();
        let maxFrequency = 0;
        let maxSize = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            if (freq.has(char)) {
                freq.set(char, freq.get(char) + 1);
            } else {
                freq.set(char, 1)
            }

            maxFrequency = Math.max(maxFrequency, freq.get(char));

            // shrink window when window length > maxFreq + k
            if ((right - left + 1) > (maxFrequency + k)) {
                // slide left, subtracting char frequency from map
                const leftFreq = freq.get(s[left]);
                freq.set(s[left], leftFreq - 1);
                left++;
            }
            maxSize = Math.max(maxSize, right - left + 1);
        }
        return maxSize;
    }
}
