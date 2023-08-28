from typing import List
import math
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        nums = []
        for i in range(len(tokens)):
            match tokens[i]:
                case '+':
                    op1 = nums.pop()
                    op2 = nums.pop()
                    nums.append(op1+op2)
                case '-':
                    op2 = nums.pop()
                    op1 = nums.pop()
                    nums.append(op1-op2)
                case '/':
                    op2 = nums.pop()
                    op1 = nums.pop()
                    nums.append(math.trunc(op1/op2))
                case '*':
                    op1 = nums.pop()
                    op2 = nums.pop()
                    nums.append(op1*op2)
                case _ :
                    nums.append(int(tokens[i]))
        return nums[0]
    
tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
s = Solution()
print(s.evalRPN(tokens))