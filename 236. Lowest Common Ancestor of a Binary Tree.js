// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/

// 236. Lowest Common Ancestor of a Binary Tree
// Difficulty: Medium

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 2 arrays for 2 paths of p and q
  let list1 = new Array();
  let list2 = new Array();
  function nodeToRoot(root, data, path) {
    //if node is not valid return false
    if (root == null) return false;
    //if node matches destination, stop and return true
    if (root.val == data) {
      path.push(root);
      return true;
    }
    //if node has left node, go to left recursively
    let lp = nodeToRoot(root.left, data, path);
    //if there are nodes, true is returned. push the path
    if (lp) {
      path.push(root);
      return true;
    }
    //Same for right
    let rp = nodeToRoot(root.right, data, path);
    if (rp) {
      path.push(root);
      return true;
    }
    //return false if nothing above matches
    return false;
  }
  //call the function on p.val. Use list1 to maintain path
  // similarly for q
  nodeToRoot(root, p.val, list1);
  nodeToRoot(root, q.val, list2);
  //now list1 and list2 have all the paths till p and q.
  let i = list1.length - 1;
  let j = list2.length - 1;
  let prev = null;
  //traversing from end to start
  while (i >= 0 && j >= 0) {
    // the list contain paths from root to leaf since we inserted them recursively. If they do not match break out of the loop
    if (list1[i].val != list2[j].val) break;
    // if they match, insert 1 in the last known common node
    prev = list1[i];
    i--;
    j--;
  }
  return prev;
};
