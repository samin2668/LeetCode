from typing import List
import math
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        l,r = 0, len(nums)-1
        if nums[-1] < target:
            return len(nums)
        if nums[0] > target:
            return 0
        while l < r:
            while nums[l] < target and l != r:
                if nums[l] == target:
                    return l
                l+=1
            while nums[r] > target and l !=r:
                if nums[r] == target:
                    return target
                r-=1
        return l
        
    
    
sol = Solution()

print(sol.searchInsert([1,3,5,6], 7))