//my headass iterative solution

import TreeNode from "../../treeNode.js"
import buildTreeLeetCode from "../../treeInsert"
function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if(!root1 || !root2) return root1 || root2
    
    let arr:any[] = []
    function createTree(inputArray:any[]):TreeNode{
        const root = new TreeNode(inputArray.shift());
        const queue = [root];
        while (queue.length > 0 && inputArray.length > 0) {
          const curNode = queue.shift();
          const leftVal = inputArray.shift() ?? null
          const rightVal = inputArray.shift() ?? null
          if (leftVal !== null) {
            curNode!.left = new TreeNode(leftVal);
            queue.push(curNode!.left);
          }
          if (rightVal !== null) {
            curNode!.right = new TreeNode(rightVal);
            queue.push(curNode!.right);
          }
        }
        return root
    }
    let q:[TreeNode|null, TreeNode|null][] = [[root1, root2]]
    while(q.length > 0){
        for(let i = 0; i < q.length; i++){
            const [first, second] = q.shift()!

            if(first === null && second === null)
                arr.push(null)
            else
                arr.push((first?.val ?? 0) + (second?.val ?? 0))

            if(first && !second){
                q.push([first.left, null])
                q.push([first.right, null])
            }
            else if(!first && second){
                q.push([null, second.left])
                q.push([null, second.right])
            }
            else if(first && second){
                q.push([first!.left, second!.left])
                q.push([first!.right, second!.right])
            }
        }
    }
    while(arr[arr.length - 1] === null)
        arr.pop()

    return createTree(arr)
};

let root1:TreeNode = buildTreeLeetCode([1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,2])
let root2:TreeNode = buildTreeLeetCode([1,null,1,null,1,null,1,null,1,null,1,2])

let result = mergeTrees(root1, root2)

console.log(result)

console.log([2,null,2,null,2,null,2,null,2,null,2,2,1,null,null,null,1,null,1,null,1,null,1,2]
.length    )



