from typing import List


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def makeList(list:List) -> ListNode:
    n = len(list)
    head = ListNode(list[0])
    tmp = head
    for i in range(1,n):
        tmp.next = ListNode(list[i])
        tmp = tmp.next
    return head