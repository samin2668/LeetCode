import TreeNode from "./treeNode";
export default function buildTreeLeetCode(inputArray: any[]): TreeNode {
    const root = new TreeNode(inputArray.shift());
    const queue = [root];
    while (queue.length > 0 && inputArray.length > 0) {
      const curNode = queue.shift();
      const leftVal = inputArray.shift() ?? null;
      const rightVal = inputArray.shift() ?? null;
      if (leftVal !== null) {
        curNode!.left = new TreeNode(leftVal);
        queue.push(curNode!.left);
      }
      if (rightVal !== null) {
        curNode!.right = new TreeNode(rightVal);
        queue.push(curNode!.right);
      }
    }
  
    return root;
}

