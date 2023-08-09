import TreeNode from '../../treeNode.js'
function getTargetCopy(original: TreeNode | null, 
                       cloned: TreeNode | null, 
                       target: TreeNode | null): TreeNode | null {

    let q:[TreeNode, TreeNode][] = []
    let tuple:[TreeNode, TreeNode] = [original!, cloned!]
    q.push(tuple)
    
    while(q.length){
        let [o,c] = q.shift()!
        if(o === target)
            return c
        
        if(o.left && c.left){
            let n:[TreeNode, TreeNode] = [o.left, c.left]
            q.push(n)
        }
        if(o.right && c.right){
            let n:[TreeNode, TreeNode] = [o.right, c.right]
            q.push(n)
        }
    }
    return null
};

let node19 = new TreeNode(19)
let node6 = new TreeNode(6)
let node3 = new TreeNode(3, node6, node19)
let node4 = new TreeNode(4)
let node7 = new TreeNode(7, node4, node3)

let nodeCopy = node7

console.log(getTargetCopy(node7, nodeCopy, node3))