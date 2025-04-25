/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    return nums.sort((a,b)=>a-b)
    // let t 
    // do{
    //     t=false
    //     for(let i=1;i<nums.length;i++){
    //         if(nums[i]<nums[i-1]){
    //             t=true
    //             nums[i]=(nums[i]+nums[i-1])-(nums[i-1]=nums[i])
    //         }
    //     }
    // }while(t)
    // return nums
};