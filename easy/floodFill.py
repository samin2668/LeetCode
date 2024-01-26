from typing import List

class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:            
        n = len(image)
        m = len(image[0])
        cell = image[sr][sc]
        
        def helper(image,r,c,cell,color,n,m) -> List[List[int]]:
            if r >= 0 and r < n and c >= 0 and c < m and image[r][c] != color and image[r][c] == cell:
                image[r][c] = color
                image = helper(image,r-1,c,cell,color,n,m)
                image = helper(image,r,c+1,cell,color,n,m)
                image = helper(image,r+1,c,cell,color,n,m)
                image = helper(image,r,c-1,cell,color,n,m)
                return image
            else:
                return image
        
        image = helper(image,sr,sc,cell,color,n,m)
        
        return image
    

s = Solution()
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1
sc = 1
color = 2
print(s.floodFill(image,sr,sc,color))