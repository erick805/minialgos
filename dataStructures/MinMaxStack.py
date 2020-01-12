'''
Write a Min Max Stack class. The class should support pushing and popping values on and off the stack, peeking at
values at the top of the stack, and getting both the minimum and maximum values in the stack. All class methods, when
considered independently, should run in constant time and with constant space.

Input:
push(5)
getMin()
getMax()
peek()
push(7)
getMin()
getMax()
peek()
push(2)
getMin()
getMax()
peek()

Output:
(push 5)
5(min)
5(max)
5(peek)
(push 7)
5(min)
7(max)
7(peek)
(push 2)
2(min)
7(max)
2(peek)
2(pop)
7(pop)
5(min)
5(max)
5(peek)
'''


class MinMaxStack:
    def __init__(self):
        self.minMaxStack = []
        self.stack = []

    def getMin(self):
        return self.minMaxStack[len(self.minMaxStack) - 1]["min"]

    def getMax(self):
        return self.minMaxStack[len(self.minMaxStack) - 1]["max"]

    def peek(self):
        return self.stack[len(self.stack) - 1]

    def pop(self):
        self.minMaxStack.pop()
        return self.stack.pop()

    def push(self, number):
        newMinMax = {"min": number, "max": number}
        if len(self.minMaxStack):
            lastMinMax = self.minMaxStack[len(self.minMaxStack) - 1]
            newMinMax["min"] = min(lastMinMax["min"], number)
            newMinMax["max"] = max(lastMinMax["max"], number)

        self.minMaxStack.append(newMinMax)
        self.stack.append(number)
