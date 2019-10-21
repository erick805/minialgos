/*
In a Binary Search Tree (BST), an Inorder Successor of a node is defined as the node with the smallest key greater than the key of the input node (see examples below). Given a node inputNode in a BST, you’re asked to write a function findInOrderSuccessor that returns the Inorder Successor of inputNode. If inputNode has no Inorder Successor, return null.

inputNode has a right child, In this case successorNode would be the node with the minimum key in inputNode's right subtree.

inputNode does not have a right child, In this case successorNode would be one of inputNode's ancestors. More specifically within inputNode's ancestor chain (starting from inputNode) up
to root node. Successor is the first parent that has a left child in that chain.

If inputNode does not have a right child and all of it's ancestors are right children to their parents, inputNode does not have a successor (successorNode would be null)

Why is this always true? Well, if inputNode was inserted to tree prior to successorNode, then since successorNode.key is greater than inputNodekey, but also smaller than all other keys greater than successorNode.key, successorNode has to be in inputNode's rights subtree.

Now, if inputNode was inserted to the tree after succesorNode was, then since inputNode.key is smaller than successorNode.key, but also larger than all other keys smaller than successorNode.key, inputNode has to be in succesorNode's left subtree.
*/
