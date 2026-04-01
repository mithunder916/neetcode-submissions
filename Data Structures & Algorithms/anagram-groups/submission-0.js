class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // Solution 2 (below) O(n * m) where n is length of strs array, m is length of longest string
        // Create an array of 26 zeros. This will be used to generate unique keys for anagrams
        // Loop through each string and generate a key by incrementing the right zeros, then joining the array with a separator
        // All anagrams will be stored with the same key so return the values
    groupAnagrams(strs) {
        const res = {};
        for (let s of strs) {
            const count = new Array(26).fill(0);
            for (let c of s) {
                console.log(c.charCodeAt(0), 'a'.charCodeAt(0))
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(',');
            // console.log(key)
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }
        return Object.values(res);
    }
}
