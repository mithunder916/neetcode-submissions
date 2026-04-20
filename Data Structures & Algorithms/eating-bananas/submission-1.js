class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // Math.ceil(piles[i] / k) = num hours required to eat
        // Math.max(...piles) = max num hours required to eat all piles

        // have a function that checks if a value for k would work in h or fewer hours
        // search space is 1 - max. If a number is valid, move left. If not, move right.

        function isValid(k) {
            let totalHours = 0;
            for (const pile of piles) {
                totalHours += Math.ceil(pile / k);
            }
            return totalHours <= h;
        }

        const maxHours = Math.max(...piles);

        // binary search
        let left = 1;
        let right = maxHours;
        let minHours;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (isValid(mid)) {
                minHours = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return minHours;
    }
}