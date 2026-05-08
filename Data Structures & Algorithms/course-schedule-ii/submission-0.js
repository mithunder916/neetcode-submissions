class ListNode {
        constructor(value) {
            this.value = value;
            this.next = null;
            this.seen = false;
        }
    }

class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        // build adj list
        const courseMap = new Map();
        for (let i = 0; i < numCourses; i++) {
            courseMap.set(i, [])
        }
        for (const [course, prereq] of prerequisites) {
            courseMap.get(course).push(prereq);
        }

        const visited = new Set();
        const processed = new Set();
        const cleared = [];
        // DFS to look for cycle
        // after traversing successfully, add to a set/list
        function checkPath(course) {
            // already cleared
            if (processed.has(course)) return true;
            // false if cycle
            if (visited.has(course)) return false;

            visited.add(course);
            // check prereqs
            for (let i = 0; i < courseMap.get(course).length; i++) {
                if (!checkPath(courseMap.get(course)[i])) {
                    return false;
                }
            }
            visited.delete(course);
            processed.add(course);
            cleared.push(course);
            return true
        }

        for (let i = 0; i < numCourses; i++) {
            if (!checkPath(i)) return [];
        }
        return cleared;
    }
}
