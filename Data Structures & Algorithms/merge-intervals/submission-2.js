class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        // sweep line: compose these into start and end events
        // sort by value, with end events before start events
        // combine

        const events = [];
        for (const [start, end] of intervals) {
            events.push([start, 1]);
            events.push([end, -1]);
        }
        events.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

        // add event value (1 or -1)
        // when it reaches 0, push that merged interval
        const merged = [];
        let depth = 0;
        let start = 0;
        
        for (let i = 0; i < events.length; i++) {
            const [value, event] = events[i];
            if (depth === 0) start = value;
            depth += event;
            if (depth === 0) merged.push([start, value])
        }

        return merged;
    }
}
