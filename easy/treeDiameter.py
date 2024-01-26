from typing import Optional
from treeNode import TreeNode
from treeInsert import buildTree

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        
        def dfs(root:Optional[TreeNode], h:int) -> int:
            if root is None:
                return h
            return max(dfs(root.left,h+1), dfs(root.right,h+1))
        
        def bfs(root:Optional[TreeNode]) -> int:
            if root is None:
                return -1
            h = -1
            q = [root]
            while len(q) > 0:
                cur = q.pop()
                lm = 0
                rm = 0
                if cur.left is not None:
                    q.append(cur.left)
                    lm = dfs(cur.left, 0)
                if cur.right is not None:
                    q.append(cur.right)
                    rm = dfs(cur.right, 0)
                h = max((lm + rm), h)
            
            return h
        return bfs(root)
    
s = Solution()
root = buildTree([4,-7,-3,None,None,-9,-3,9,-7,-4,None,6,None,-6,-6,None,None,0,6,5,None,9,None,None,-1,-4,None,None,None,-2])
print(s.diameterOfBinaryTree(root))
