class Solution:
    def addBinary(self, a: str, b: str) -> str:
        A = list(a)
        B = list(b)
        result = ''
        carryOver = False
        
        while A or B or carryOver:
            if A:
                x = A.pop()
            else:
                x = '0'
                
            if B:
                y = B.pop()
            else:
                y = '0'
            
            if (x == '1' and y == '1') and carryOver == False:
                result = '0' + result
                carryOver = True
            elif (x == '1' and y == '1') and carryOver == True:
                result = '1' + result
            elif (x == '0' and y == '0') and carryOver == False:
                result = '0' + result
            elif (x == '0' and y == '0') and carryOver == True:
                result = '1' + result
                carryOver = False
            elif ((x == '0' and y == '1') or (x == '1' and y == '0')) and carryOver == False:
                result  = '1' + result
            elif ((x == '0' and y == '1') or (x == '1' and y == '0')) and carryOver == True:
                result = '0' + result
            
        return result
    
s = Solution()
print(s.addBinary('1111','1111'))