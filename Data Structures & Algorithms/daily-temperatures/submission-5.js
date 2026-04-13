class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // fill result array with 0s (default value)
        // scan the array, adding temperatures to a stack. Store both index and temp
        // if the current temp is greater than any in the stack, pop and update results
        const result = Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            if (stack.length === 0 || temperatures[i] <= stack[stack.length - 1][1]) {
                stack.push([i, temperatures[i]]);
                continue;
            }
            console.log(stack)
            if (temperatures[i] > stack[stack.length - 1][1]) {
                while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][1]) {
                    const popped = stack.pop();
                    // update result
                    result[popped[0]] = i - popped[0];
            }
            // add current element to stack
            stack.push([i, temperatures[i]])
            }

        }

        return result;
    }
}
