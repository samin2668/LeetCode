import ListNode from "../listNode";

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(!list1 || !list2)
        return list1 || list2
    else if(!list1 && !list2)
        return null
    else{
            let list3 = new ListNode()
            let head = list3
            do{
                let val1 = list1 ? list1.val : Infinity
                let val2 = list2 ? list2.val : Infinity
                if(val1 === val2){
                    list3.next = new ListNode(val1, new ListNode(val2))
                    list3 = list3.next.next!
                    list1 = list1?.next!
                    list2 = list2?.next!
                }
                else if(val1 < val2){
                    list3.next = new ListNode(val1)
                    list3 = list3.next
                    list1 = list1?.next!
                }
                else if(val2 < val1){
                    list3.next = new ListNode(val2)
                    list3 = list3.next
                    list2 = list2?.next!
                }
            }while(list1 || list2)       
            return head.next
        }
};

let listOne = [1,2,4]
let listTwo = [1,3,4]

let listONE = new ListNode(listOne[0])
let temp = listONE
for(let i = 1; i < listOne.length; i++){
    temp.next = new ListNode(listOne[i])
    temp = temp.next
}

let listTWO = new ListNode(listTwo[0])
temp = listTWO
for(let i = 1; i < listTwo.length; i++){
    temp.next = new ListNode(listTwo[i])
    temp = temp.next
}

console.log(mergeTwoLists(listONE, listTWO))

