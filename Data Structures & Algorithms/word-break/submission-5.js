class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const memo = new Map();
         // try every word against string
            // once there's a match, move starting index and repeat. Try every word
        // if you can't find a match, return false
        function findMatch(index) {
            if (memo.has(index)) return memo.get(index);
            if (index === s.length) return true;
            for (const word of wordDict) {
                if (s.slice(index).startsWith(word)) {
                    // return findMatch(index + word.length);
                    if (findMatch(index + word.length)) {
                        memo.set(index, true);
                        return true;
                    }
                }
            }
            // no match found
            memo.set(index, false);
            return false;
        }

        return findMatch(0);
    }
}