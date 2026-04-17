class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const values = this.keyStore.has(key) ? this.keyStore.get(key) : [];
        values[timestamp] = value;
        this.keyStore.set(key, values);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return "";
        } else {
            const values = this.keyStore.get(key);
            if (values[timestamp]) return values[timestamp];
            else {
                // scan left and return first value
                for (let idx = timestamp - 1; idx > -1; idx--) {
                    if (values[idx] !== undefined) return values[idx];
                }
                return "";
            }
        }
    }
}
