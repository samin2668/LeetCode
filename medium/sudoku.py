from typing import List
from collections import Counter

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for i in range(len(board)):
            rowCount = Counter(board[i])
            rowCount.pop('.')
            colCount = Counter([row[i] for row in board])
            colCount.pop('.')
            if any(count >= 2 for count in rowCount.values()):
                return False
            if any(count >= 2 for count in colCount.values()):
                return False
        for i in range(0, 9, 3):
            for j in range(0, 9, 3):
                cnt = Counter(board[i][j:j+3] + board[i+1][j:j+3] + board[i+2][j:j+3])
                cnt.pop('.')
                if any(count >= 2 for count in cnt.values()):
                    return False

        return True
    
board = [["8","3",".",".","7",".",".",".","."],
         ["6",".",".","1","9","5",".",".","."],
         [".","9","8",".",".",".",".","6","."],
         ["8",".",".",".","6",".",".",".","3"],
         ["4",".",".","8",".","3",".",".","1"],
         ["7",".",".",".","2",".",".",".","6"],
         [".","6",".",".",".",".","2","8","."],
         [".",".",".","4","1","9",".",".","5"],
         [".",".",".",".","8",".",".","7","9"]]
sol = Solution()
    
print(sol.isValidSudoku(board))