/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let k = 0 
    for(let i=m;i<m+n;i++){
        nums1[i]=nums2[k++]
    }
    return nums1.sort((a,b)=>a-b)
};