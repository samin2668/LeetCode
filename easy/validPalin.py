class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = ''.join(filter(str.isalnum, s)).lower()
        sRev = s[::-1]
        if s == sRev:
            return True
        return False
    
sol = Solution()
print(sol.isPalindrome("A man, a plan, a canal: Panama"))