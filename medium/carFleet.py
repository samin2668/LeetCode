from typing import List

class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        stack = []
        cars = [[p,s] for p,s in sorted(zip(position,speed), reverse=True)]
        
        for p,s in cars:
            stack.append((target - p) / s)
            if len(stack) >= 2 and stack[-1] <= stack[-2]:
                stack.pop()
                
        
        return len(stack)
        
        
        
position = [10,8,0,5,3]
speed = [2,4,1,1,3]
target = 12

sol = Solution()
print(sol.carFleet(target, position, speed))