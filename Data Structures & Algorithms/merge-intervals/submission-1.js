class Solution {
    /**
     * @param {number[][]}
     * @return {number[][]}
     */

    merge(intervals) {
        // sweep line: create events and sort
        const events = [];
        for (const [start, end] of intervals) {
            events.push([start, 1]);
            events.push([end, -1]);
        }
        // 0 is start or end value, 1 is type (start or end)
        events.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

        let depth = 0;
        const results = [];
        let start = 0;

        // while (position < events.length) {
        //     const [value, type] = events[position];
        //     depth += type;
        // }
        for (const [value, type] of events) {
            if (depth === 0) start = value;
            depth += type;
            if (depth === 0) results.push([start, value])
        }

        return results;
    }
    // merge(intervals) {
    //     // sort ascending by i[0]
    //     // if end_i of previous interval >= start_i of next interval, merge
    //         // new interval: [start_i of prev, Math.max(end_i of prev, end_i of next)]
    //         // then continue with new interval
    //     const result = [];
    //     // sort ascending
    //     intervals.sort((a, b) => a[0] - b[0]);
    //     let right = 1;
    //     let current = intervals[0];
    //     let next;

    //     while (right < intervals.length) {
    //         next = intervals[right];
    //         if (current[1] >= next[0]) {
    //             // merge
    //             const merged = [current[0], Math.max(current[1], next[1])];
    //             // set current to merged
    //             current = merged;
    //         } else {
    //             // if can't merge, add current and move forward
    //             result.push(current);
    //             current = intervals[right];
    //         }

    //         right++;
    //     }
    //     // add the final current
    //     result.push(current);

    //     return result;
    // }
}