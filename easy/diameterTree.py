from treeNode import TreeNode
from treeInsert import buildTree
from typing import Optional


class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        res = 0

        def dfs(root):
            nonlocal res

            if not root:
                return 0
            left = dfs(root.left)
            right = dfs(root.right)
            res = max(res, left + right)

            return 1 + max(left, right)

        dfs(root)
        return res


inputArr = [1,2,3,4,5]
root = buildTree(inputArr)
sol = Solution()

print(sol.diameterOfBinaryTree(root))