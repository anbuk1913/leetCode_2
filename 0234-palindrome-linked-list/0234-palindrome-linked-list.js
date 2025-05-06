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
    let ans = ""
    let curr = head
    while(curr){
        ans+=curr.val
        curr = curr.next
    }
    let tem = ans
    tem = ans.split("").reverse("").join("")
    return ans==tem
};