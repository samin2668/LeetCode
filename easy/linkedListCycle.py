class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

from typing import Optional


class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if head == None or head.next == None:
            return False
        s = set()
        tmp = head
        while tmp != None:
            if tmp not in s:
                s.add(tmp)
                tmp = tmp.next
            else:
                return True
        
        return False
    
node1 = ListNode(3)
node2 = ListNode(2)
node3 = ListNode(0)
node4 = ListNode(-4)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2

sol = Solution()

print(sol.hasCycle(node1))

            