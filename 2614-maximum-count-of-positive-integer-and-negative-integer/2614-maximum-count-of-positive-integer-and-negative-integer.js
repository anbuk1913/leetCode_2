/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let left = 0
    let right = nums.length-1

    let mid
    
    if((nums[left]<0 && nums[right]<0) || (nums[left]>0 && nums[right]>0)){
        return nums.length
    }

    while(left<=right){
        mid = Math.floor((left+right)/2)
        if(nums[mid]==0){
            break
        }
        else if(nums[mid]<0){
            left = mid+1
        }
        else if(nums[mid]>0){
            right = mid-1
        }
    }

    if(nums[mid]==0){
        left = right = mid
        while(nums[left]==0 && left!=0){
            left--
        }
        while(nums[right]==0 && right!=nums.length-1){
            right++
        }
        let max = 0
        if(left+1>nums.length-right){
            max = left+1
        } else if(left+1<nums.length-right) {
            max = nums.length-right
        }
        if(left+1==nums.length-right && nums[0]!=0){
            max = left+1
        }
        return max
    } else {
        if(nums[mid]<0){
            let max = 0
            left = mid
            right = mid+1
            if(left+1>nums.length-right){
                max = left+1
            } else if(left+1<nums.length-right) {
                max = nums.length-right
            }
            if(left+1==nums.length-right && nums[0]!=0){
                max = left+1
            }
            return max
        } else {
            let max = 0
            left = mid-1
            right = mid
            if(left+1>nums.length-right){
                max = left+1
            } else if(left+1<nums.length-right) {
                max = nums.length-right
            }
            if(left+1==nums.length-right && nums[0]!=0){
                max = left+1
            }
            return max
            }
    }
};