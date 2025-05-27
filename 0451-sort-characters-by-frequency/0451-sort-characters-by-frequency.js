/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    s=s.split("")
    let arr = Array(s.length).fill(-1)
    for(let i=0;i<s.length;i++){
        let count = 1
        if(arr[i]==-1){
            for(let j=i+1;j<s.length;j++){
                if(s[i]===s[j]){
                    count++
                    arr[j]=0
                }
            }
            arr[i]=count
        }
    }
    for(let i=1;i<arr.length;i++){
        let curr = arr[i]
        let j = i-1
        let tem = s[i]
        while(j>=0 && arr[j]<curr){
            s[j+1] = s[j]
            arr[j+1] = arr[j--]
        }
        s[j+1] = tem
        arr[j+1] = curr
    }
    let ans = ""
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0)break
        else{
            for(let j=0;j<arr[i];j++){
                ans+=s[i]
            }
        }
    }
    return ans
};