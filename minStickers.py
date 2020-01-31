'''
You are a children's soccer coach and you have a list of student's with values of unique goals scored.
No goal scored is the same and order is not necessarily sorted. You want to reward each student with sticker's
for each respective amount of goals scored.

There are only three rules:
- each student must receive at least one sticker
- any given student must receive strictly more stickers than adjacent(to the left or
to the right) student's with a lower score.
- any given student must receive strictly fewer stickers than adjacent student's with
a higher score.

Write a function that takes in a list of goals scored and returns the minimum number of stickers that you must
give out to all the students, while satisfying the three rules.

Input: [8,4,2,1,3,6,7,9,5]
Output: 25 ([4,3,2,1,2,3,4,5,1])
'''


def minStickers(goals):
    stickers = [1 for sticker in goals]

    for i in range(1, len(goals)):
        if goals[i] > goals[i - 1]:
            stickers[i] = stickers[i - 1] + 1

    for i in reversed((range(len(goals) - 1))):
        if goals[i] > goals[i + 1]:
            stickers[i] = max(stickers[i], stickers[i + 1] + 1)

    return sum(stickers)
