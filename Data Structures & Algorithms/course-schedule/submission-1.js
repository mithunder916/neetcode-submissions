class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // build adjacency list
        const adjList = new Map();
        for (let i = 0; i < numCourses; i++) {
            adjList.set(i, [])
        }
        for (let [course, prereq] of prerequisites) {
            adjList.get(course).push(prereq)
        }

        // DFS 
        // return true if can complete that course (no cycle), false if there's a cycle
        const visited = new Set();

        function canComplete(course) {
            if (visited.has(course)) {
                // cycle detected
                return false;
            }
            // if no prereqs
            if (adjList.get(course).length === 0) {
                return true;
            }

            // tracks what we've seen; if repeat, there's a cycle
            visited.add(course);
            // check each prereq for that course
            for (let prereq of adjList.get(course)) {
                if (!canComplete(prereq)) {
                    return false;
                }
            }

            visited.delete(course);
            // adjList.set(course, []);
            return true
        }

        for (let c = 0; c < numCourses; c++) {
            if (!canComplete(c)) return false
        }
        return true;
    }
}
