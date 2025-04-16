/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let t=0
    for(let i=m;i<m+n;i++){
        nums1[i]=nums2[t++]
    }
    let tem
    do{
        tem = false
        for(let i=1;i<nums1.length;i++){
            if(nums1[i-1]>nums1[i]){
                nums1[i] = (nums1[i]+nums1[i-1]) - (nums1[i-1]=nums1[i])
                tem = true
            }
        }
    }while(tem)    
};