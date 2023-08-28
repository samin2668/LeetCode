from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        tmp: ListNode = head.next
        prev: ListNode = head
        while tmp != None:
            prev.next = tmp.next
            tmp.next = prev
            
            tmp = prev.next.next
            prev = prev.next

            
        return head
            

four = ListNode(4)
three = ListNode(3,four)
two = ListNode(2, three)
one = ListNode(1, two)

sol = Solution()

print(sol.swapPairs(one))
