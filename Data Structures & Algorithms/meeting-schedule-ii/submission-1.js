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
        // sweep line; compose into events and sort
        const events = [];

        for (const interval of intervals) {
            events.push([interval.start, 1]);
            events.push([interval.end, -1]);
        }

        events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

        let depth = 0;
        let maxDepth = 0;

        for (const [value, type] of events) {
            depth += type;
            maxDepth = Math.max(maxDepth, depth);
        }

        return maxDepth;
    }
}
