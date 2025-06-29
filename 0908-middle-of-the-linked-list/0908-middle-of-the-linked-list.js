/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head
    let fast = head
    while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }
    if(fast.next){
        slow = slow.next
    }
    return slow
};