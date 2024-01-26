from linkedList import ListNode
from linkedList import makeList
from typing import Optional
from math import inf
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if not list1 or not list2:
            return list1 or list2
        elif not list1 and not list2:
            return None
        
        head = ListNode()
        tmp = head
        while list1 or list2:
            val1 = list1.val if list1 else inf
            val2 = list2.val if list2 else inf
            if val1 < val2:
                tmp.next = ListNode(val1)
                tmp = tmp.next
                list1 = list1.next
            elif val2 < val1:
                tmp.next = ListNode(val2)
                tmp = tmp.next
                list2 = list2.next
            else:
                tmp.next = ListNode(val1, ListNode(val2))
                tmp = tmp.next.next
                list1 = list1.next
                list2 = list2.next
        
        return head.next

s = Solution()
list1 = makeList([1,2,4])
list2 = makeList([1,3,4])
print(s.mergeTwoLists(list1, list2))
            