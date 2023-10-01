from typing import List
import collections

class Solution:
    def findMin(self, nums: List[int]) -> int:
        l=0
        r=len(nums)-1
        res=nums[l] 
        while l<=r:
            if nums[l] < nums[r]:
                res = min(res, nums[l])
                break
            k=l+(r-l)//2
            if nums[k] >= nums[l]:
                l=k+1
                res = min(nums[k], res)
            else:
                r=k-1
                res = min(nums[k], res)
            
        return res

nums=[4,5,6,7,0,1,2]

sol = Solution()
print(sol.findMin(nums))