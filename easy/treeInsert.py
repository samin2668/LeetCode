from typing import List
from treeNode import TreeNode

def buildTree(inputArray:List):
    root = TreeNode(inputArray.pop(0))
    q = [root]
    while len(q) > 0 and len(inputArray) > 0:
        curNode = q.pop(0)
        left = inputArray.pop(0)
        right = inputArray.pop(0)
        
        if left != None:
            curNode.left = TreeNode(left)
            q.append(curNode.left)
        if right != None:
            curNode.right = TreeNode(right)
            q.append(curNode.right)
    
    return root
