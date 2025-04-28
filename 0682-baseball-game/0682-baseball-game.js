/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let arr = []
    for(let i of operations){
        let t = Number(i)
        if(t<Infinity){
            arr.push(Number(i))
        }
        else if(i == "C"){
            arr.pop()
        }
        else if(i == "D"){
            let tem = Number(arr[arr.length-1])
            arr.push(tem*2)
        } 
        else if(arr.length>1){
            let tem = Number(arr[arr.length-1]) + Number(arr[arr.length-2])
            arr.push(tem)
        } else {
            let tem = Number(arr[arr.length-1])
            arr.push(tem)
        }
    }
    let ans = 0
    for(let i of arr)ans+=i
    return ans
};