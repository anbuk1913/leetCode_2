/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let curr = head
    while(curr){
        let t = true
        if(curr.val==val){
            head = curr.next
            curr = head
            t = false
        }
        else if(curr.next && curr.next.val==val) {
            curr.next = curr.next.next
            t = false
        }
        if(t){
            curr = curr.next
        }
    }
    return head
};