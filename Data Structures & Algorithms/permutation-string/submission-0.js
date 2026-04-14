class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let lookup = new Map();
    // create map of s1 chars and counts
    for (let char of s1) {
        lookup.set(char, lookup.get(char) ? (lookup.get(char) + 1) : 1);
    }

    // increment when we've seen a character the right number of times
    let matches = 0;
    // used to track seen characters
    let window = new Map();

    for (let right = 0; right < s2.length; right++) {
        const currentChar = s2[right];
        window.set(currentChar, window.get(currentChar) ? window.get(currentChar) + 1 : 1);

        if (lookup.get(currentChar) === window.get(currentChar)) matches++;
        // decrease matches if we found too many of that character
        else if (window.get(currentChar) === lookup.get(currentChar) + 1) matches--;

        // need to shrink window when it gets bigger than s1.length
        if (right >= s1.length) {
            const leftChar = s2[right - s1.length];

            // if count was right, it's going to be wrong once we subtract
            if (window.get(leftChar) === lookup.get(leftChar)) matches--;
            // if count was too low by one, it's now going to be correct
            else if (window.get(leftChar) === lookup.get(leftChar) + 1) matches++;

            // update window state
            window.set(leftChar, window.get(leftChar) - 1);
        }

        // lookup.size is the number of keys aka unique chars in s1
        if (matches === lookup.size) return true;
    }

    return false;
    }
}
