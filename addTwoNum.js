/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let list = new ListNode(0)
    let head = list
    let sum = 0
    let carry = 0
    while(l1!==null || l2!==null || sum>0){
        if(l1!==null){
            sum+=l1.val
            l1 = l1.next
        }

        if(l2!==null){
            sum+=l2.val
            l2 = l2.next
        }
        if(sum>=10){
            sum -=10
            carry = 1
        }
        head.next = new ListNode(sum)
        head = head.next
        sum = carry
        carry = 0
    }
    return list.next
}

list1= new ListNode(2,new ListNode(4, new ListNode(3)))
list2= new ListNode(5,new ListNode(6, new ListNode(4)))

var results=addTwoNumbers(list1,list2)

while(results!==null){
    console.log(results.val)
    results = results.next
}
