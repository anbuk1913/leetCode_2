/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next)return true
    let slow = head
    let fast = head
    while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }
    let sec = reverse(slow.next)
    slow = head
    while(sec){
        if(sec.val != slow.val)return false
        sec = sec.next
        slow = slow.next
    }
    return true
};

function reverse(head){
    let curr = head
    let prev = null
    let next = null
    while(curr){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}