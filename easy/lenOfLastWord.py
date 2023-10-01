class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        s = s.strip(' ')
        res = s.split(' ')
        return len(res[-1])
        
    
s = "   fly me   to   the moon  "
sol = Solution()
print(sol.lengthOfLastWord(s))