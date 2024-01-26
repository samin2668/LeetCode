from typing import Counter
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        note = Counter(ransomNote)
        mag = Counter(magazine)
        
        if note <= mag:
            return True
        
        return False
    
s = Solution()
print(s.canConstruct('aa', 'aacb'))