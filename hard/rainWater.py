from typing import List
class Solution:
    def trap(self, height: List[int]) -> int:
        ans = 0
        n = len(height)
        if n <= 2:
            return ans
        i = 1
        lMax = 0
        rMax = 0
        while i < n -1 :
            lMax = max(height[0:i])
            rMax = max(height[i+1:n])
            water = min(lMax, rMax) - height[i]
            ans += water if water > 0 else 0
            i+=1
        return ans
sol = Solution()
print(sol.trap([0,1,0,2,1,0,1,3,2,1,2,1]))