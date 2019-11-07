/*
Given a list accounts, each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some email that is common to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

Example 1:
Input:
accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]

Output: [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]

Explanation:

The first and third John's are the same person as they have the common email "johnsmith@mail.com".
The second John and Mary are different people as none of their email addresses are used by other accounts.
We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'],
['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.

*/

function accountsMerge(accounts) {
  // create a set of unique root emails
  const rootEmails = new Set();
  // create an owner object to store user with root email
  const owner = {};
  // create a parent child relationship
  const parent = {};
  const children = {};

  // loop through our accounts array to check each account
  for (let account of accounts) {
    // destructure into user, root email, and rest of emails
    const [user, rootEmail, ...emails] = account;
    // check if rootEmail has a parent
    const r1 = find(rootEmail);
    // set user with root email
    owner[rootEmail] = user;
    // set children as the parent or root email
    children[r1] = children[r1] || [rootEmail];
    // add root to root emails
    rootEmails.add(r1);

    // check the rest of our emails
    for (let email of emails) {
      // check if email has a parent email
      const r2 = find(email);
      // if child email does not equal our parent email - then we know it is unique
      if (r2 !== r1) {
        // set the parent child relationship
        parent[r2] = r1;
        // push into our children array if our children already exists or the new emails
        children[r1].push(...(children[r2] ? children[r2] : [email]));
        // we can delete the child since we have it in our children array
        rootEmails.delete(r2);
        // remove the children from our child object as well.
        delete children[r2];
      }
    }
  }
  // take our unique root emails and render the owner with each of it's children email sorted
  return [...rootEmails].map(rootEmail => [
    owner[rootEmail],
    ...children[rootEmail].sort()
  ]);

  // this function checks if their is a parent and returns the parent, if there is no parent then it returns the element since itself is a parent.
  function find(element) {
    parent[element] = parent[element] || element;
    return element === parent[element] ? element : find(parent[element]);
  }
}
