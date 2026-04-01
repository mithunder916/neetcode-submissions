class Solution {
    // Solution 1: encode joins with delimiter like ","; decode splits with same delimiter
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // converts list to single string
        return strs.map(str => `${str.length}#${str}`).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        const decoded = [];
        let i = 0;
        // represents count
        let numStr = "";
        while (i < str.length) {
            while (str[i] !== "#") {
            numStr += str[i];
            i++;
        }
            // move i past separator
            i++; 
            let length = parseInt(numStr);
            let nextString = str.slice(i, i + length) 
            decoded.push(nextString);

            i = i + length;
            numStr = "";
        }

        return decoded;

    }
}
