class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const courseMap = new Map();
        for (let i = 0; i < numCourses; i++) {
            courseMap.set(i, []);
        }
        for (const [course, prereq] of prerequisites) {
            courseMap.get(course).push(prereq);
        }

        const visited = new Set();
        const seenOnPath = new Set();

        function canCompleteCourse(course) {
            if (visited.has(course)) return true;
            if (seenOnPath.has(course)) return false;

            seenOnPath.add(course);
            const prereqs = courseMap.get(course);
            for (let i = 0; i < prereqs.length; i++) {
                if (!canCompleteCourse(prereqs[i])) return false;
            }

            // course can be completed
            seenOnPath.delete(course);
            visited.add(course);
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!canCompleteCourse(i)) return false;
        }
        return true;
    }
}
