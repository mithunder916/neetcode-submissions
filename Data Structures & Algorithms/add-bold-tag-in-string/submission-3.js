class Solution {
    /**
     * @param {string} s
     * @param {string[]} words
     * @return {string}
     */
    addBoldTag(s, words) {
        // create a boolean array where each value is true if that character is bold
        const boldArray = new Array(s.length).fill(false);

        // go through string looking for words
        for (const word of words) {
            let start = s.indexOf(word);
            while (start !== -1) {
                for (let i = start; i < start + word.length; i++) {
                    boldArray[i] = true;
                }
                start = s.indexOf(word, start + 1)
            }
        }

        // construct result string using array
        let result = "";
        for (let i = 0; i < s.length; i++) {
            if (boldArray[i] && (!boldArray[i - 1] || i === 0)) result += "<b>";
            result += s[i];
            if (boldArray[i] && (!boldArray[i + 1] || i === s.length - 1)) result += "</b>"
        }

        return result;
    }
}
