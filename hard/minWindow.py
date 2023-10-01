from collections import Counter
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        res = ''
        if len(s) < len(t):
            return res
        elif s == t:
            return s
        
        
        tCount = Counter(t)
        for l in range(len(s)):
            r=l
            sCount = Counter(s[l:r+1])
            while tCount not in sCount:
                r+=1
                
            
        return res
        
s = "ADOBECODEBANC"
t = "ABC"
sol = Solution()
print(sol.minWindow(s,t))