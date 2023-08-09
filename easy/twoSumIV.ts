import TreeNode from "../treeNode"
import buildTreeLeetCode from "../treeInsert"

function findTarget(root: TreeNode | null, k: number): boolean {

    let set = new Set<number>()

    function bfs(root:TreeNode|null):any{
        let q = [root]
        while(q.length){
            for(let i = 0; i < q.length; i++){
                let node = q.shift()
                if(set.has(node!.val))
                    return true
                set.add(k - node!.val)
                if(node?.left)
                    q.push(node.left)
                if(node?.right)
                    q.push(node.right)
            }
        }
        return false
    }

    function dfs(root:TreeNode|null):any{
        if(root === null)
            return
        else if(set.has(root!.val))
            return true

        set.add(k - root.val)

        return dfs(root.left) || dfs(root.right) || false
    }

    function dfs2(root:TreeNode|null):any{
        let s = [root]
        while(s.length){
            for(let i = 0; i < s.length; i++){
                let node = s.pop()
                if(set.has(node!.val))
                    return true
                set.add(k-node!.val)
                if(node?.left)
                    s.push(node.left)
                if(node?.right)
                    s.push(node.right)
            }
        }
        return false
    }

    if(root !==null){
        //return dfs(root)
        return dfs2(root)
        //return bfs(root)

    }
    else
        return false
};

let root = buildTreeLeetCode([5,3,6,2,4,null,7])

console.log(findTarget(root, 28))
