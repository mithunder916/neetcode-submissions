/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        // compose into start and end events
        // [0, 1], [40, -1], [5, 1], [10, -1], [15, 1], [20, -1]
        // sort these by first value and then with start events before end events
        // [0, 1], [5, 1], [10, -1], [15, 1], [20, -1], [40, -1]
        // the height/depth is max number of concurrent rooms needed
        const events = [];
        for (const interval of intervals) {
            events.push([interval.start, 1]);
            events.push([interval.end, -1]);
        }

        // sort
        events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

        let maxDepth = 0;
        let depth = 0;

        for (const [time, type] of events) {
            depth += type
            maxDepth = Math.max(depth, maxDepth);
            
        }

        return maxDepth;
    }
}
