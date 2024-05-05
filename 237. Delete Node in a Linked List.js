// https://leetcode.com/problems/delete-node-in-a-linked-list/description/?envType=daily-question&envId=2024-05-05

// 237. Delete Node in a Linked List
// Difficulty: Medium

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  // iterate towards end and replace value of existing node with the next node.
  while (node && node.next) {
    node.val = node.next.val;
    // break if it is the last element
    if (!node.next.next) {
      node.next = null;
      break;
    }
    node = node.next;
  }
};
