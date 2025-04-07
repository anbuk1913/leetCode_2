/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    const n = nums.length;
    const result = Array(n).fill(0);
    const indexes = Array.from({ length: n }, (_, i) => i);
    function mergeSort(left, right) {
        if (left >= right) return;
        const mid = Math.floor((left + right) / 2);
        mergeSort(left, mid);
        mergeSort(mid + 1, right);
        merge(left, mid, right);
    }
    function merge(left, mid, right) {
        const temp = [];
        let i = left;
        let j = mid + 1;
        let rightCount = 0;
        while (i <= mid && j <= right) {
            if (nums[indexes[j]] < nums[indexes[i]]) {
                temp.push(indexes[j]);
                rightCount++;
                j++;
            } else {
                temp.push(indexes[i]);
                result[indexes[i]] += rightCount;
                i++;
            }
        }
        while (i <= mid) {
            temp.push(indexes[i]);
            result[indexes[i]] += rightCount;
            i++;
        }
        while (j <= right) {
            temp.push(indexes[j]);
            j++;
        }
        for (let k = 0; k < temp.length; k++) {
            indexes[left + k] = temp[k];
        }
    }
    mergeSort(0, n - 1);
    return result;
};