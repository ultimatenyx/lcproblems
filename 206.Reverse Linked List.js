// https://leetcode.com/problems/reverse-linked-list/description/?envType=daily-question&envId=2024-03-21

// 206. Reverse Linked List
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
var reverseList = function (head) {
  // Return null if input is null
  if (!head) {
    return head;
  }
  // 2 temp variables to perform swap operation
  let t1, t2;
  //shallow copy or could have been a deep copy since this is js.
  let cp = head;
  // Deep copy
  t1 = { ...cp };
  t1.next = null;
  //First elem separated in t1
  //move cp to the next pointer
  cp = cp.next;
  while (cp) {
    //t2 is temp 2. Deep copy of cp starting with 2nd elem
    t2 = { ...cp };
    // append first elem t1 to t2 as second elem
    t2.next = { ...t1 };
    // update t2 to contain the reversed first 2 elems
    t1 = { ...t2 };
    // move to next cp and repeat
    cp = cp.next;
  }
  // Return updated
  return t1;
};
