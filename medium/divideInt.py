import math
class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        result = dividend/divisor
        if(result< 0):
            result = math.ceil(result)
            result = max(result, (-2)**31)
        else:
            result = math.floor(result)
            result = min(result, (2**31)-1)
        return result
    
s = Solution()
print(s.divide(-2147483648,-1))