import TreeNode from "../treeNode";
function binaryTreePaths(root: TreeNode | null): string[] {
    const result: string[] = [];
    function helper(node: TreeNode, path: string): void {
        if (!node.left && !node.right) {
          result.push(path + node.val);
          return;
        }
        const currentPath = path + node.val + "->";
        if (node.left) helper(node.left, currentPath);
        if (node.right) helper(node.right, currentPath);
      }
    if (root) helper(root, "");
    return result;
}
  

let node1:TreeNode = new TreeNode(1)
let node2:TreeNode = new TreeNode(2)
let node3:TreeNode = new TreeNode(3)
let node5:TreeNode = new TreeNode(5)

node1.left = node2
node1.right = node3
node2.right = node5

console.log(binaryTreePaths(node1))


