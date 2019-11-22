/*
Every email consists of a local name and a domaine name, seperated by the @ sign.

For example, in alice@leetcode.come, alice is the local name and leetcode.com is the domain name

Besides lowercase letters, these emails may contain "." or "+"s.

If you add periods(".") between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. For example "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.

If you add a plus ("+") in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com. (Again this rule does not apple for domain names)

It is possible to use both of these rules at the same time.

Given a list of emails, we send one email to each address in the list. How many different addresses actually receive mails?

Example 1:

Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]

Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails
*/
