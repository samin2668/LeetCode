from typing import Counter

class Solution:
    def longestPalindrome(self, s: str) -> int:
        count = Counter(s)
        length = 0
        toRemove = []
        for char,i in count.most_common():
            if i % 2 == 0:
                length += i
                toRemove.append(char)
            else:
                length += i - 1
                count[char] = i - (i-1)
            
        count = Counter({x:cnt for x,cnt in count.items() if x not in toRemove})

        if len(count) >= 1:
            length += 1
                        
        return length
    
s = Solution()
print(s.longestPalindrome("zeusnilemacaronimaisanitratetartinasiaminoracamelinsuez"))