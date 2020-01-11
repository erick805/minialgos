'''
Write a function that takes in an array of unique integers and returns an array of all permutations of those integers.
If the input array is empty, your function should return an empty array.

Input: array = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
'''


# Upper Bound: O(n^2*n!) time | O(n*n!) space
# Roughly: O(n*n!) time | O(n*n!) space
def permutations(array):
    permutations = []
    permutationsHelper(array, [], permutations)
    return permutations


def permutationsHelper(arr, currentPermutation, permutations):
    if not len(arr) and len(currentPermutation):
        permutations.append(currentPermutation)
    else:
        for i in range(len(arr)):
            newArr = arr[:i] + arr[i + 1:]  # copy other letters
            newPerm = currentPermutation + [arr[i]]
            permutationsHelper(newArr, newPerm, permutations)


def permutationsOptimized(array):
    permutations = []
    permutationsHelperOptimized(0, array, permutations)
    return permutations


def permutationsHelperOptimized(i, arr, permutations):
    if i == len(arr) - 1:
        permutations.append(arr[:])
    else:
        for j in range(i, len(arr)):
            swap(arr, i, j)
            permutationsHelperOptimized(i + 1, arr, permutations)
            swap(arr, i, j)


def swap(arr, i, j):
    arr[i], arr[j] = arr[j], arr[i]
