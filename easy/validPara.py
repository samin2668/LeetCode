from collections import deque

class Solution:
    def isValid(self, s: str) -> bool:
        if not s or len(s) % 2 == 1 or s[0] in ')]}' or s[-1] in '({[':
            return False
        stack = []
        for char in s:
            if char in '([{':
                stack.append(char)
            elif char == ')':
                if len(stack) == 0 or stack[-1] != '(':
                    return False
                stack.pop()
            elif char == ']':
                if len(stack) == 0 or stack[-1] != '[':
                    return False
                stack.pop()
            elif char == '}':
                if len(stack) == 0 or stack[-1] != '{':
                    return False
                stack.pop()
        if len(stack) == 0:
            return True
        return False
        
sol = Solution()
s = '()))'
print(sol.isValid(s))