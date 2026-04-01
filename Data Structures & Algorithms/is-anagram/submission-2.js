class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const mapS = new Map()
        const mapT = new Map()
        let answer = true;

        for (let char of s) {
            const count = mapS.get(char) ? mapS.get(char) + 1 : 1;
            mapS.set(char, count);
        }

        for (let char of t) {
            const count = mapT.get(char) ? mapT.get(char) + 1 : 1;
            mapT.set(char, count);
        }

        if (mapS.size !== mapT.size) {
            answer = false;
        } else {
            mapS.keys().forEach(key => {
                if (mapS.get(key) !== mapT.get(key)) {
                    answer = false;
                } 
            })
        }

        return answer;
    }
}
