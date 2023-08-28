from typing import List
from collections import Counter
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        res = []
        arr = Counter(nums).most_common(k)
        for i in range(k):
            res.append(arr[i][0])
        return res
    
sol = Solution()
print(sol.topKFrequent([1,1,1,2,2,3], 3))