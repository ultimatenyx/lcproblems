// https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/description/?envType=daily-question&envId=2024-05-07

// 2816. Double a Number Represented as a Linked List
// Difficulty: Medium

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
var doubleIt = function (head) {
  // creating a recursive function
  function doubler(mynode) {
    let carry = 0;
    // if next node is present call it in recursion
    if (mynode && mynode.next) {
      carry = doubler(mynode.next);
    }
    // double the number and add carry from next number, if any
    let temp = carry + mynode.val * 2;
    // enter a single digit value
    mynode.val = temp % 10;
    // quotient to be passed
    temp = parseInt(temp / 10);

    return temp;
  }
  let c = doubler(head);
  // if we have an extra carry, create a new node and assign to start of head
  if (c > 0) {
    let n = new ListNode(c, head);
    return n;
  }
  return head;
};
