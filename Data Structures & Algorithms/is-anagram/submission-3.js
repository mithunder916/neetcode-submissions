class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const mapS = new Map()
        const mapT = new Map()
        let answer = true;

        for (let i = 0; i < s.length; i++) {
            const countS = mapS.get(s[i]) ? mapS.get(s[i]) + 1 : 1;
            const countT = mapT.get(t[i]) ? mapT.get(t[i]) + 1 : 1;

            mapS.set(s[i], countS);
            mapT.set(t[i], countT)
        }

        for (let [char, count] of mapS) {
            // If the count in mapT doesn't match, we can exit early
            if (mapT.get(char) !== count) {
                return false;
            }
        }

        return answer;
    }
}
