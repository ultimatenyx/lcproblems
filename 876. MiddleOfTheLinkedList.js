// https://leetcode.com/problems/middle-of-the-linked-list/description/?envType=daily-question&envId=2024-03-07

// 876. Middle of the Linked List
// Difficulty: Easy
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let fast = head,
    slow = head;
  while (slow && fast) {
    if (fast.next && fast.next.next) {
      //handling the odd case
      fast = fast.next.next;
      slow = slow.next;
    } else {
      //Handling the even case
      if (fast.next) slow = slow.next;
      break;
    }
  }
  return slow;
};
