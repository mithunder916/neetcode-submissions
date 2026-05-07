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

        function dfs(course) {
            if (visited.has(course)) {
                // cycle detected
                return false;
            }
            if (adjList.get(course).length === 0) {
                return true;
            }

            visited.add(course);
            for (let prereq of adjList.get(course)) {
                if (!dfs(prereq)) {
                    return false;
                }
            }
            visited.delete(course);
            adjList.set(course, []);
            return true
        }

        for (let c = 0; c < numCourses; c++) {
            if (!dfs(c)) return false
        }
        return true;
    }
}
