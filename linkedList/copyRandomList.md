A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list. You must return the copy of the given head as a reference to the cloned list.

Example 1:
![](copy-random-list.png)

```js
/*

Definition for a Node.
function Node(val,next,random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

Input:
{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

Explanation:
Node 1's value is 1, both of its next and random pointer points to Node 2.
Node 2's value is 2, its next pointer points to null and its random pointer points to itself.
*/

const copyRandomList = head => {
  const copy = new Node(null);
  let curCopy = copy;

  let cur = head;
  const cloneMap = new Map();

  while (cur) {
    let temp = new Node(cur.val);
    curCopy.next = temp;
    curCopy = temp;

    cloneMap.set(cur, temp);
    cur = cur.next;
  }

  cur = head;

  while (cur) {
    let origRandom = cur.random;
    if (origRandom) {
      cloneMap.get(cur).random = cloneMap.get(origRandom);
    }
    cur = cur.next;
  }

  return copy.next;
};
```

Credits to: [leetcode.com](https://leetcode.com/problems/copy-list-with-random-pointer/)
