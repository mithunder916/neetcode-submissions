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
        // sweep line: compose intervals into events of [time, type]
        // sort by time; basically the max number of overlapping meetings is the answer
        const events = [];
        for (const interval of intervals) {
            events.push([interval.start, 1]);
            events.push([interval.end, -1]);
        }
        // sort by time; for ties, end events should come first (equal is not a conflict)
        events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

        let depth = 0;
        let maxDepth = 0;
        console.log('events', events)

        for (const [time, type] of events) {
            depth += type;
            maxDepth = Math.max(maxDepth, depth);
        }

        return maxDepth;
    }
}
