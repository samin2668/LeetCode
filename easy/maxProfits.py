from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        left, right = 0, 1
        curMAX = 0
        while right < len(prices):
            if prices[left] < prices[right]:
                curMAX = max(curMAX, prices[right] - prices[left])
            else:
                left = right
            right+=1
            
        return curMAX
    
prices = [7,1,5,3,6,4]
s = Solution()
print(s.maxProfit(prices))