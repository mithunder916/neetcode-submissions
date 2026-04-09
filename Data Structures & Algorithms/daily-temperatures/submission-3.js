class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // use a stack; should be monotonic decreasing (or equal)
        // add elements with their indices to the stack until you find one greater than the last one
            // pop elements in the stack that are smaller than that one, using the indices to calculate the delta for our result 
            // then add the next element and continue
        if (temperatures.length === 0) return [];
        const stack = [];
        const results = new Array(temperatures.length).fill(0);

        for (let i = 0; i <= temperatures.length; i++) {
            // if empty stack OR current temperature is less than or equal to one on top of stack, add it
            if (stack.length === 0 || temperatures[i] <= stack[stack.length - 1][1]) {
                stack.push([i, temperatures[i]]);
                continue;
            }
            // if current temperature is greater than top of stack, set some results
            // pop element until you find a greater one
            if (temperatures[i] > stack[stack.length - 1][1]) {
                while (stack.length > 0 && stack[stack.length - 1][1] < temperatures[i]) {
                    const lastTemp = stack.pop();
                    results[lastTemp[0]] = i - lastTemp[0];
                }
                stack.push([i, temperatures[i]]);
            }
        }

        return results;
    }
}
