class Solution:
    def removeDupes(self, string:str) ->str:
        s = set(string)
        return ''.join(sorted(s))
        
        
        
sol = Solution()

print(sol.removeDupes('bbaaaicediddddgifffhhh'))
