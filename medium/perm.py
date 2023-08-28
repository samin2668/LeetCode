from typing import List

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        def backtrack(nums, path):
            #if nums in empty then we have a permutation 
            #push perm into result and return 
            if not nums: 
                result.append(path) 
                return 
            for i in range(len(nums)):
                #copy elements up to i (excluding i)
                #then add elements from i+1 to end 
                #pass path + current value from nums
                backtrack(nums[:i] + nums[i+1:], path + [nums[i]]) 
        result = [] 
        backtrack(nums, []) 
        return result
    
s = Solution()
print(s.permute([1,2,3,4]))