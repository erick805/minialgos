'''
Write a class for a suffix-like data structure. The class should have a "root" property set to be the root node of the
trie. The class should support creation from a string and the searching of strings. The creation method (called populateSuffixTrieFrom())
will be called when the class is instantiated and should populate the "root" property of the class. Note that every
string added to the trie should end with the special "endSymbol" character:"*".

Input (for creation): "babc"

Output (for creation):
{"c": {"*": True},
 "b": {
   "c": {"*": True},
   "a": {"b": {"c": {"*": True}}},
 },
 "a": {"b": {"c": {"*": True}}},
}

Input (for searching the suffix trie above): "abc"
Output: True
'''


class SuffixTrie:
    def __init__(self, string):
        self.root = {}
        self.endSymbol = "*"
        self.populateSuffixTrieFrom(string)

    def populateSuffixTrieFrom(self, string):
        for i in range(string):
            self.insertSubstringStartingAt(i, string)
