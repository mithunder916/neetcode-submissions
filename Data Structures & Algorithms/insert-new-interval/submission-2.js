class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        // extension of merge interval; need to insert interval in right place and maybe sort
        // if interval_start is <= any interval's end OR interval_end is >= any interval's start, MERGE
        // could just push the interval in the right place and then merge

        // push then sort; don't think ties matter
        // const allIntervals = [...intervals, newInterval].sort((a, b) => a[0] - b[0] || a[1] - b[1]);

        // // merge
        // // if current_end >= next_start, merge by combine current_start and next_end
        //     // after merge, current is the merged interval, next is the following interval
        //     // push final interval into results
        // // if no merge, push current into results 

        // console.log('all', allIntervals)

        // const results = [];
        // let current = allIntervals[0];
        // let right = 1;

        // while (right < allIntervals.length) {
        //     const next = allIntervals[right];
        //     if (current[1] >= next[0]) {
        //         // merge
        //         // current might already have a greater end interval
        //         current = [current[0], Math.max(next[1], current[1])];
        //     } else {
        //         results.push(current);
        //         current = next;
        //     }
        //     right++;
        // }
        // // push last interval
        // results.push(current)

        // return results;

        let index = 0;
    const results = [];
    // Phase 1: while intervals[i] ends before newInterval starts, push to result
    while (index < intervals.length && intervals[index][1] < newInterval[0]) {
        results.push(intervals[index]);
        index++;
    }
    // Phase 2: while intervals[i] overlaps with newInterval, expand newInterval
    while (index < intervals.length && newInterval[1] >= intervals[index][0]) {
        newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
        index++;
    }
    results.push(newInterval)

    // Phase 3: push remaining intervals
    while (index < intervals.length) {
        results.push(intervals[index]);
        index++;
    }
    return results;
    }
}
