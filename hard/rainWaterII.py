from typing import List

class Solution:
    def trap(self, height: List[int]) -> int:
        if len(height) <= 2:
            return 0
        ans = 0
        l,r = 0, len(height)-1
        lMax,rMax = height[0], height[-1]
        while l <= r:
            if height[l] > lMax:
                lMax = height[l]
            if height[r] > rMax:
                rMax = height[r]
            if lMax <= rMax:
                ans += lMax - height[l]
                l += 1
            else:
                ans += rMax - height[r]
                r -= 1
        return ans
                
sol = Solution()

print(sol.trap([0,1,0,2,1,0,1,3,2,1,2,1]))