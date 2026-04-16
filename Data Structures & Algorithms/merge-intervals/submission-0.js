class Solution {
    /**
     * @param {number[][]}
     * @return {number[][]}
     */
    merge(intervals) {
        // sort ascending by i[0]
        // if end_i of previous interval >= start_i of next interval, merge
            // new interval: [start_i of prev, Math.max(end_i of prev, end_i of next)]
            // then continue with new interval
        const result = [];
        // sort ascending
        intervals.sort((a, b) => a[0] - b[0]);
        let right = 1;
        let current = intervals[0];
        let next;

        while (right < intervals.length) {
            next = intervals[right];
            if (current[1] >= next[0]) {
                // merge
                const merged = [current[0], Math.max(current[1], next[1])];
                // set current to merged
                current = merged;
            } else {
                // if can't merge, add ___ and move forward
                result.push(current);
                current = intervals[right];
            }

            right++;
        }
        
        result.push(current);

        return result;
    }
}