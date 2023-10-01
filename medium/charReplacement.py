from collections import Counter

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        res = 0
        l = 0
        count = Counter()
        for r in range(len(s)):
            count[s[r]]+=1
            if (r-l+1) - count.most_common()[0][1] > k:
                count[s[l]]-=1
                l+=1
            res = max(res, (r-l+1))
        return res
        
        
string = 'AABABBA'
s = Solution()
print(s.characterReplacement(string,1))