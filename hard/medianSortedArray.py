from typing import List

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        median = 0
        pointer1 = 0
        pointer2 = 0
        nums3 = []
        while pointer1 < len(nums1) or pointer2 < len(nums2):
            
            if pointer2 >= len(nums2) or pointer1 < len(nums1) and nums1[pointer1] < nums2[pointer2]:
                nums3.append(nums1[pointer1])
                pointer1+=1
            elif pointer1 >= len(nums1) or pointer2 < len(nums2) and nums1[pointer1] > nums2[pointer2]:
                nums3.append(nums2[pointer2])
                pointer2+=1
            else:
                nums3.append(nums1[pointer1])
                nums3.append(nums2[pointer2])
                pointer1+=1
                pointer2+=1
            
        if len(nums3) % 2 == 0:
            i = len(nums3)//2
            return (nums3[i] + nums3[i-1])/2
        return nums3[len(nums3)//2]
            

# [0,1,2,3]
n1 = [1,2]
n2 = [3,4]
sol = Solution()
print(sol.findMedianSortedArrays(n1,n2))