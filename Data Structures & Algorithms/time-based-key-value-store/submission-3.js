class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    binarySearch(target, list) {
        let left = 0;
        let right = list.length - 1;
        let mid;

        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            const currentTimestamp = list[mid][0];
            if (currentTimestamp === target) return list[mid][1];
            else if (currentTimestamp < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        if (right < 0) return "";
        return list[right][1];
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const values = this.keyStore.has(key) ? this.keyStore.get(key) : [];
        // stores values as [timestamp, value]
        values.push([timestamp, value])
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
            return this.binarySearch(timestamp, this.keyStore.get(key))
        }
    }
}

