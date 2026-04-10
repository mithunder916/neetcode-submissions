class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // calculate distance left: target - position
        // calculate time left: distance / speed
        // sort by position
        // since cars cannot pass, if the car ahead is slower (time left), then the current car becomes part of that fleet
            // the constraint is the slowest car ahead
        // if the current car is the slowest so far, it's a new fleet
        // const timeToDestination = [];
        const positionAndTimes = position
        .map((pos, i) => [pos, (target - pos) / speed[i]])
        .sort((a, b) => b[0] - a[0]);

        let slowest = 0;
        let fleets = 0;

        for (const [pos, time] of positionAndTimes) {
            if (time > slowest) {
                slowest = time;
                fleets++;
            }
        }

        return fleets;
    }
}
