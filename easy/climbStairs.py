class Solution:
    def climbStairs(self, n: int) -> int:
        #create empty table
        dp = [0]*(n+1)
        #go through table
        for i in range(0, n+1):
            #base case
            if i <= 2:
                dp[i] = i
            #fib
            else:
                dp[i] = dp[i-1] + dp[i-2]
        #return nth from table    
        return dp[n]

s = Solution()
print(s.climbStairs(38))