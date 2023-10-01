from typing import List

class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        fast = 0
        slow = 0
        
        while True:
            slow = nums[slow]
            fast = nums[nums[fast]]
            if slow == fast:
                break
        
        slow2=0
        while True:
            slow = nums[slow]
            slow2 = nums[slow2]
            if slow == slow2:
                return slow
            
    
                    
                    
nums = [2,5,9,6,9,3,8,9,7,1]


sol = Solution()
print(sol.findDuplicate(nums))
        