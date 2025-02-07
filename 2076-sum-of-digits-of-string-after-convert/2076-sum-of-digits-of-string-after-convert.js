/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let arr=[]
    for(let i=0;i<s.length;i++){
        let a = String(s.charCodeAt(i)-96)
        a=a.split('')
        arr.push(a)
    }
    arr=arr.flat()

    let tem =[]
    for(let i=0;i<k;i++){
        let total = 0
        for(let j=0;j<arr.length;j++){
            total+=Number(arr[j])
        }
        let ans = String(total)
        ans=ans.split('')
        while(0<arr.length){
            arr.pop()
        }
        for(let j=0;j<ans.length;j++)arr.push(ans[j])
    }
    arr=arr.join("")
    return Number(arr)
};