from collections import Counter

class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False
        n = len(s1)
        c1 = Counter(s1)
        for i in range(len(s2)):
            c2 = Counter(s2[i:i+len(s1)])
            if  sum(c2.values())< n:
                break
            if c1 == c2:
                return True
        
        return False
        
        
        
sol = Solution()
s1 = "abc"
s2 = "xxcvxcnmbn"
print(sol.checkInclusion(s1,s2))