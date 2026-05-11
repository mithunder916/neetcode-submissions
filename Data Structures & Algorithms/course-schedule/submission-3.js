class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // construct adjList
        const courseMap = new Map();
        for (let i = 0; i < numCourses; i++) {
            courseMap.set(i, []);
        }
        for (const [course, prereq] of prerequisites) {
            courseMap.get(course).push(prereq);
        }

        const visited = new Set();
        const cleared = new Set();
        // recurse through each course looking for a cycle (impossible to finish)
        // post order (search children first)
        function canComplete(course) {
            if (cleared.has(course)) return true;
            if (visited.has(course)) return false;

            visited.add(course);

            const prereqs = courseMap.get(course);
            // check each prereq first
            for (let i = 0; i < prereqs.length; i++) {
                if (!canComplete(prereqs[i])) return false;
            }

            cleared.add(course);
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!canComplete(i)) return false;
        }
        return true;
    }
}
