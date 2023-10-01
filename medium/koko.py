from typing import List
import math

class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l=1
        r=max(piles)
        res=r
        
        while l<=r:
            k = l+(r-l)//2
            hours=0
            for pile in piles:
                hours+=math.ceil(pile/k)
            if hours <= h:
                res = min(res, k)
                r=k-1
            else:
                l=k+1
        
        return res
    
sol = Solution()
piles=[3,6,7,11]
h=8

print(sol.minEatingSpeed(piles,h))