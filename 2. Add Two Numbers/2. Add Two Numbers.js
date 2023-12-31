/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var dummy = new ListNode(0)
    var current = dummy
    var sum=0
    var carry=0
    while(l1!==null || l2!==null){
        const x = l1!==null? l1.val : 0
        const y = l2!==null? l2.val : 0
        sum=x+y+carry
        carry = Math.floor(sum / 10);
        current.next=new ListNode(sum%10)
        current=current.next
        if(carry>0){
            current.next=new ListNode(carry)
        }
        l1=l1!==null? l1.next : null
        l2=l2!==null? l2.next : null
    }
    return dummy.next    
};