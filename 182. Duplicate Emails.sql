/*
// https://leetcode.com/problems/duplicate-emails/description/

// 182. Duplicate Emails
// Difficulty: Easy
*/
-- Write your MySQL query statement below
select email from Person group by email HAVING COUNT(email)>1;
