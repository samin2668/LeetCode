from typing import Counter, List

# class Solution:
#     def permuteUnique(self, nums: List[int]) -> List[List[int]]:
#         def backtrack(nums, path):
#             #if nums in empty then we have a permutation 
#             #push perm into result and return 
#             if not nums and path not in result: 
#                 result.append(path) 
#                 return 
#             for i in range(len(nums)):
#                 #copy elements up to i (excluding i)
#                 #then add elements from i+1 to end 
#                 #pass path + current value from nums
#                 backtrack(nums[:i] + nums[i+1:], path + [nums[i]]) 
#         result = [] 
#         backtrack(nums, []) 
#         return result
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        
        permutations = []
        counter = Counter(nums)
        def findAllPermutations(res):
            if len(res) == len(nums):
                permutations.append(res)
                return 
            
            for key in counter:
                if counter[key]:
                    counter[key]-=1 # decrement visited key
                    findAllPermutations(res + [key])    
                    counter[key]+=1 # restore the state of visited key to find the next path
                
        findAllPermutations([])
        return permutations
    
s = Solution()
print(s.permuteUnique([1,1,2]))