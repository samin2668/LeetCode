# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

def isBadVersion(version: int) -> bool:
    if version >= 4:
        return True
    else:
        return False

class Solution:
    def firstBadVersion(self, n: int) -> int:
        i = 1
        j = n
        
        while i < j:
            pivot = (i+j)//2
            if isBadVersion(pivot):
                j = pivot
            else:
                i = pivot + 1
                
        return i
                
s = Solution()

print(s.firstBadVersion(11))