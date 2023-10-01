from typing import Optional
from treeNode import TreeNode
from treeInsert import buildTree

#Iterative BFS
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        
        res = 0
        q = [root]
        while q:
            for i in range(len(q)):
                node = q.pop(0)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            res+=1
        return res
        
        
inputArr = [0,2,4,1,None,3,-1,5,1,None,6,None,8]
root = buildTree(inputArr)
sol = Solution()
print(sol.maxDepth(root))