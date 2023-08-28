from typing import List
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        ans = [0]*len(temperatures)
        stack = []
        for i,t in enumerate(temperatures):
            while stack and t > stack[-1][0]:
                stackT, stackI = stack.pop()
                ans[stackI] = (i - stackI)
            stack.append([t,i])
        return ans
                    
s = Solution()
temperatures = [73,74,75,71,69,72,76,73]
print(s.dailyTemperatures(temperatures))