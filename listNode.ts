export default class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }

}

export function makeList(arr:number[]):ListNode|null{
    let head = new ListNode(arr[0])
    let copy = head
    for(let i = 1; i < arr.length; i++){
        copy.next = new ListNode(arr[i])
        copy = copy.next
    }

    return head 
}