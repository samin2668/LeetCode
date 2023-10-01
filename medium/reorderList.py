from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        tmp = head
        while tmp.next != None: 
            prev = tmp
            tmp = tmp.next
            
        prev.next = None
        nextNode = head.next
        head.next = tmp
        tmp.next = nextNode

node4 = ListNode(5)
node3 = ListNode(4, node4)   
node2 = ListNode(3, node3)
node1 = ListNode(2, node2)
head = ListNode(1,node1)

sol = Solution()

print(sol.reorderList(head))