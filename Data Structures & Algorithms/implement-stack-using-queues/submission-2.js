class MyStack {
    constructor() {
        this.queue = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue.push(x);

        for (let i = 0; i < this.queue.length - 1; i++) {
            this.queue.push(this.queue.shift());
        }
    }

    /**
     * @return {number}
     */
    pop() {
        return this.queue.shift();
    }

    /**
     * @return {number}
     */
    top() {
        return this.queue[0];
    }

    /**
     * @boolean
     */
    empty() {
        return this.queue.length <= 0;
    }
}