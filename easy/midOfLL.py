from typing import Optional
from linkedList import ListNode
from linkedList import makeList
import math

class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        length = 0
        temp = head
        
        while temp:
            length += 1
            temp = temp.next
        
        if length % 2 == 1:
            mid = math.ceil(length/2)
        else:
            mid = length/2 + 1
        
        counter = 1
        while head and counter != mid:
            counter += 1
            head = head.next
        
        return head
            
s = Solution()
head = makeList([1,2,3,4,5])
print(s.middleNode(head))