class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        // two pointers, check if equal at each step until they cross
        let left = 0;
        let right = clean.length - 1;

        while (left < right) {
            if (clean[left] !== clean[right]) return false;
            left++;
            right--;
        }

        return true;
    }
}
