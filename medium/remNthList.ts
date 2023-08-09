import ListNode, { makeList } from "../listNode";
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if(head === null)
        return null

    let arr:ListNode[] = []

    while(head != null){
        arr.push(head)
        head = head.next
    }
    if(arr.length === 1 && n === 1)
        return null
    let l = -n-1
    let r = -n+1

    if((l >= -arr.length && l <= -1) && (r >= -arr.length && r <= -1))
        arr.at(l)!.next = arr.at(r)!
    else if(n === arr.length){
        return arr[1]
    }
    else if(n === 1){
        arr.at(-2)!.next = null
        return arr[0]
    }

    return arr[0]
};

let head = makeList([1])

console.log(removeNthFromEnd(head, 1))





