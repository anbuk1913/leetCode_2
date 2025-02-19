/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let arr=[]
    for(let i=0;i<digits.length;i++){
        for(let j=0;j<digits.length;j++){
            if(i==j)continue
            for(let k=0;k<digits.length;k++){
                if(i==k || j==k )continue
                let a=digits[i]*100+digits[j]*10+digits[k]
                if(digits[i] !=0 && a%2==0)arr.push(a)
            }
        }
    }
    arr =[...new Set(arr)]
    return arr.sort((a,b)=>a-b)
};