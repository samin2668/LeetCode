//recursive solution

import TreeNode from "../../../treeNode.js"
import buildTreeLeetCode from "../../../treeInsert.js"
function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if(!root1 && !root2) return null
    let val = (root1 ? root1.val : 0) + (root2 ? root2.val : 0)
    let mergedTree = new TreeNode(val)

    mergedTree.left = mergeTrees(root1 ? root1.left : null, root2 ? root2.left : null)
    mergedTree.right = mergeTrees(root1 ? root1.right : null, root2 ? root2.right : null)
    
    return mergedTree
};

let root1:TreeNode = buildTreeLeetCode([1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,2])
let root2:TreeNode = buildTreeLeetCode([1,null,1,null,1,null,1,null,1,null,1,2])

let result = mergeTrees(root1, root2)

console.log(result)



