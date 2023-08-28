from typing import List
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if nums == []:
            return 0
        count: int = 1
        m: int = count
        nums = list(set(nums))
        nums.sort()
        for i in range(len(nums)-1):
            if nums[i+1] == 1 + nums[i]:
                count+=1
            else:
                m = max(m, count)
                count = 1
        return max(m, count)
    

sol = Solution()
print(sol.longestConsecutive([100,4,200,1,3,2]))
        
        

        