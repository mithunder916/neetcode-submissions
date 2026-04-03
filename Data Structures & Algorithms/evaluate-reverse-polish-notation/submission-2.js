class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        function compute(operator, operand1, operand2) {
            if (operator === "+") {
                return operand1 + operand2;
            } else if (operator === "-") {
                return operand1 - operand2;
            } else if (operator === "*") {
                return operand1 * operand2;
            } else if (operator === "/") {
                return Math.trunc(operand1 / operand2);
            }

        }
        const operators = {
            "+": true,
            "-": true,
            "*": true,
            "/": true
        };
        const stack = [];
        // store numbers in a stack
        // when an operator is encountered, pop elements of the stack and compute
        // put the result in the stack and continue
        for (const token of tokens) {
            if (operators[token]) {
                // pop and compute
                const operand2 = stack.pop();
                const operand1 = stack.pop();
                stack.push(compute(token, operand1, operand2));

            } else {
                stack.push(JSON.parse(token));
            }
        }

        return stack.pop();
    }
}
