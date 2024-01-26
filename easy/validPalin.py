class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = ''.join(filter(str.isalnum, s)).lower()
        sRev = s[::-1]
        if s == sRev:
            return True
        return False
    
    def isPalindrome2(self, s: str) -> bool:
        l,r = 0, len(s)-1
        
        while l < r:
            if not s[l].isalnum():
                l+=1
            elif not s[r].isalnum():
                r-=1
            else:
                if s[l].lower() != s[r].lower():
                    return False
                else:
                    l+=1
                    r-=1
        return True
            
    
sol = Solution()
print(sol.isPalindrome("A man, a plan, a canal: Panama"))