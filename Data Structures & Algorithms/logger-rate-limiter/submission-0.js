class Logger {
    constructor() {
        // Map: key is message, value is allowed timestamp
        this.limits = new Map();
    }

    /**
     * @param {number} timestamp
     * @param {string} message
     * @return {boolean}
     */
    shouldPrintMessage(timestamp, message) {
        if (this.limits.has(message) && this.limits.get(message) > timestamp) {
            // not allowed
            return false;
        } else {
            this.limits.set(message, timestamp + 10);
            return true;
        }
    }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

// need to store when each message is allowed
// Map: key is message, value is allowed timestamp
    // shouldPrint checks if timestamp is >= to allowed OR message is new
        // if true, update allowed and return true
        // if false, return false
