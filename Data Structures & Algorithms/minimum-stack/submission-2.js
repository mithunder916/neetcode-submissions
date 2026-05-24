class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        // minStack will always push the minimum value to the top
        // if val is not the min, we'll add a copy of the min to the top
        // this is fine because we'll end up popping the true min if we get to that point
        // using peek on minStack would return the wrong value
        const min = Math.min(val, this.minStack.length === 0
                ? val
                : this.minStack[this.minStack.length - 1]);
        this.minStack.push(min);
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop();
        return this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
