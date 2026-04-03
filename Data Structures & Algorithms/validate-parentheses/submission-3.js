class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // place each open bracket in a stack
        // if a close brack is encountered, pop the stack and keep going if it's a match
            // if not return false

        const stack = [];
        for (const character of s) {
            if (character === "(" || character === "{" || character === "[") {
                stack.push(character);
            }
            else if (character === ")") {
                const lastBracket = stack.pop();
                if (lastBracket !== "(") return false;
            }
            else if (character === "}") {
                const lastBracket = stack.pop();
                if (lastBracket !== "{") return false;
            }
            else if (character === "]") {
                const lastBracket = stack.pop();
                if (lastBracket !== "[") return false;
            }
        }
        return stack.length === 0 ? true : false;
    }
}
