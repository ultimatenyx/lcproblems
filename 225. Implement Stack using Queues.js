// https://leetcode.com/problems/implement-stack-using-queues/description/

// 225. Implement Stack using Queues
// Difficulty: Easy

var MyStack = function () {
  // Maintaining one queue
  this.q1 = [];
};
/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  // normal operation
  this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let q2 = [];
  // empty q1 to q2 except the last element
  while (this.q1.length > 1) {
    q2.push(this.q1.shift());
  }
  // take out the last element
  let temp = this.q1.shift();
  // push everything back into q1
  while (q2.length > 0) {
    this.q1.push(q2.shift());
  }
  return temp;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  // same process as pop but we insert the last element as well and dont pop it
  let q2 = [];
  while (this.q1.length > 1) {
    q2.push(this.q1.shift());
  }
  let temp = this.q1.shift();
  q2.push(temp);
  while (q2.length > 0) {
    this.q1.push(q2.shift());
  }
  return temp;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length == 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
