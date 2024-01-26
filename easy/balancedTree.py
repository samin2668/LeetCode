# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import Optional
from treeNode import TreeNode
from treeInsert import buildTree
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        if root == [] or root == None or root and root.left == None and root.right == None:
            return True
        
        def helper(root: TreeNode):
            if root == None:
                return 0
            
            return 1 + max(helper(root.left), helper(root.right))
        
        left = helper(root.left)
        right = helper(root.right)
        
        diff = abs(left - right)
        
        return abs(left - right) <= 1 and self.isBalanced(root.left) and self.isBalanced(root.right)
    
    
root = buildTree([1,2,2,3,None,None,3,4,None,None,4])

s = Solution()
print(s.isBalanced(root))