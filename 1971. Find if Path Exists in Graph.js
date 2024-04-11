// https://leetcode.com/problems/find-if-path-exists-in-graph/description/

// 1971. Find if Path Exists in Graph
// Difficulty: Easy

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  //Handling Edge case
  if (n == 1) return true;
  // using BFS
  // creating an adjacency list
  let al = new Array(n + 1);
  for (let i = 0; i < edges.length; i++) {
    if (!al[edges[i][0]]) {
      let t1 = new Array();
      t1.push(edges[i][1]);
      al[edges[i][0]] = t1;
    } else {
      al[edges[i][0]].push(edges[i][1]);
    }
    if (!al[edges[i][1]]) {
      let t1 = new Array();
      t1.push(edges[i][0]);
      al[edges[i][1]] = t1;
    } else {
      al[edges[i][1]].push(edges[i][0]);
    }
  }
  // Bidirectional adjacency list completed
  // create a queue wiht starting node/vertex
  let q = [source];
  // visited array to track if we have visited it before. Will also serve as reachable for the end output
  let visited = new Array(n).fill(false);
  // run the loop on queue
  while (q.length != 0) {
    let curr = q.shift();
    // if adjacency list has an array of vertices
    if (al[curr]) {
      // loop over them and insert them in queue if they are not visited before and set the visited flag to true
      for (let i = 0; i < al[curr].length; i++) {
        if (!visited[al[curr][i]]) {
          q.push(al[curr][i]);
          visited[al[curr][i]] = true;
        }
      }
    }
  }
  // return if the destination is reachable
  return visited[destination];
};
