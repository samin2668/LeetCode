import TreeNode from '../../treeNode'
import buildTreeLeetCode from '../../treeInsert'
function maxDepth(root: TreeNode | null): number {
    if(!root)
        return 0

    let depth = 0
    let q:[TreeNode] = [root]
    while(q.length){
        let count = q.length
        for(let i = 0; i < count; i++){
            let node = q.shift()
            if(node?.left)
                q.push(node.left)
            if(node?.right)
                q.push(node.right)
        }
        depth += 1
    }
    return depth
};

let tree1 = buildTreeLeetCode([1,2,3,4,null,null,5])

console.log(maxDepth(tree1))