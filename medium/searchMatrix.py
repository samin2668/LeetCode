from typing import List

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        row = 0
        left = 0
        right = len(matrix[0])-1
        
        while left <= right and row < len(matrix):
            if matrix[row][right] < target:
                row+=1
            else:
                m = left+(right-left)//2
                if matrix[row][m] == target:
                    return True
                elif matrix[row][m] < target:
                    left=m+1
                else:
                    right=m-1
        return False
                
sol = Solution()
matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
target = 13
print(sol.searchMatrix(matrix, target))