from treeNode import TreeNode
from treeInsert import buildTree

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        
        def search(root, node, path):
            path.append(root)
            if root.val == node.val:
                return path
            elif node.val < root.val:
                return search(root.left, node, path)
            else:
                return search(root.right, node, path)
            
        list1 = search(root, p, [])
        list2 = search(root, q, [])
        
        list3 = [value for value in list1 if value in list2]
        
        return list3[-1]
        
root = [6,2,8,0,4,7,9,None,None,3,5]
p = TreeNode(2)
q = TreeNode(8)


root = buildTree(root)
s = Solution()

print(s.lowestCommonAncestor(root,p,q))
