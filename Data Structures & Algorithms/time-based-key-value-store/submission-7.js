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
        this.keyStore.has(key) ? this.keyStore.get(key).push([timestamp, value]) : this.keyStore.set(key, [[timestamp, value]]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        // binary search 
        const values = this.keyStore.get(key);
        if (!values) return "";

        let left = 0;
        let right = values.length - 1;
        let result = "";

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (values[mid][0] === timestamp) return values[mid][1];
            else if (values[mid][0] < timestamp) {
                result = values[mid][1];
                left = mid + 1
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}
