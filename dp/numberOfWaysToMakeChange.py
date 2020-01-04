'''
Given an array of positive integers representing coin denominations and a single non-negative integer
representing a target amount of money, implement a function that returns the number of ways to make
change for that target amount using the given coin denominations. Note that an unlimited amount of
coins is at your disposal.

Input: 6, [1,5]
Output: 2 (1*1 + 1*5 and 6*1)
'''


def numberOfWaysToMakeChange(n, denoms):
    ways = [0 for amount in range(n + 1)]
    ways[0] = 1

    for denom in denoms:
        for amount in range(1, n + 1):
            if denom <= amount:
                ways[amount] += ways[amount - denom]

    return ways[n]
