/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let arr=[]
    if(digits.length<3)return []
    for(let i=0;i<digits.length;i++){
        for(let j=i+1;j<digits.length;j++){
            for(let k=j+1;k<digits.length;k++){
                let a=digits[i]*100+digits[j]*10+digits[k]
                let b=digits[i]*100+digits[k]*10+digits[j]
                let c=digits[j]*100+digits[i]*10+digits[k]
                let d=digits[j]*100+digits[k]*10+digits[i]
                let e=digits[k]*100+digits[i]*10+digits[j]
                let f=digits[k]*100+digits[j]*10+digits[i]
                if(a%2==0 && a>99 && !arr.includes(a))arr.push(a)
                if(b%2==0 && b>99 && !arr.includes(b))arr.push(b)
                if(c%2==0 && c>99 && !arr.includes(c))arr.push(c)
                if(d%2==0 && d>99 && !arr.includes(d))arr.push(d)
                if(e%2==0 && e>99 && !arr.includes(e))arr.push(e)
                if(f%2==0 && f>99 && !arr.includes(f))arr.push(f)
            }
        }
    }
    arr.sort((a,b)=>a-b)
    return arr
};