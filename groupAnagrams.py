'''
Write a function that takes in an array of strings and returns a list of group of anagrams. Anagrams are strings made
up of exactly the same letters, where order doesn't matter. For example, "cinema" and "iceman" are anagrams; similarly,
"foo" and "ofo" are anagrams. Note that the groups of anagrams don't need to be ordered in any particular way.

Input: ["yo","act","flop","tac","cat","oy","olfp"]
Output: [["yo", "oy"], ["act", "tac", "cat"], ["flop", "olfp"]]
'''


# O(w * n * log(n)) time | O(wn) space, w = # of words, n = length of each word
def groupAnagrams(words):
    anagrams = {}

    for word in words:
        sortedWord = "".join(sorted(word))
        if sortedWord in anagrams:
            anagrams[sortedWord].append(word)
        else:
            anagrams[sortedWord] = [word]

    return list(anagrams.values())
