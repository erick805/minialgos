'''
Given an array of positive integers representing the coin denominations and a single non-negative integer representing a target
amount of money, implement a function that returns the smallest number of coins needed to make change for that target amount using
the given coin denominations. Note that an unlimited amount of coins is at your disposal. If it is impossible to make change for the
target amount, return -1.

Input: n = 7, denoms = [1,5,10]
Output 3 (2*1 + 1*5)
'''

# O(nd) time | O(n) space


def minNumberOfCoinsForChange(n, denoms):
    numOfCoins = [float("inf") for amount in range(n + 1)]
    numOfCoins[0] = 0

    for denom in denoms:
        for amount in range(len(numOfCoins)):
            if denom <= amount:
                numOfCoins[amount] = min(
                    numOfCoins[amount], 1 + numOfCoins[amount - denom])

    return numOfCoins[n] if numOfCoins[n] != float("inf") else -1
