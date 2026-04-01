class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // max water is determined by height of shorter bar * (right idx - left idx)
        // move min height of the two
        let left = 0;
        let right = heights.length - 1;
        let maxWater = 0;

        while (left < right) {
            const water = Math.min(heights[left], heights[right]) * (right - left);
            maxWater = Math.max(water, maxWater);

            // what if heights are equal?
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxWater;
    }
}
