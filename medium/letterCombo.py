from typing import List

class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        keypad = {
            '2': ['a','b','c'],
            '3': ['d','e','f'],
            '4': ['g','h','i'],
            '5': ['j','k','l'],
            '6': ['m','n','o'],
            '7': ['p','q','r','s'],
            '8': ['t','u','v'],
            '9': ['w','x','y','z'],
        }
        
        results = []
        
        def backTracking(currStr:str, digit:int):
            if len(currStr) == len(digits):
                results.append(currStr)
                return
            else:
                vals = keypad.get(digits[digit])
                for c in vals:
                    backTracking(currStr+c, digit+1)
        
        if len(digits) > 0:
            backTracking('',0)
            
        return results