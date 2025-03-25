/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
    let curHr = Number(current[0]+current[1])
    let curMin = Number(current[3]+current[4])
    let corHr = Number(correct[0]+correct[1])
    let corMin = Number(correct[3]+correct[4])
    let corrTotalMin = (corHr*60)+corMin
    let currTotalMin = (curHr*60)+curMin
    let diffMin = corrTotalMin - currTotalMin
    let  count=0
    let arr=[60,15,5,1]
    let bal = diffMin
    for(let i=0;i<arr.length;i++){
        if(bal>=arr[i]){
            count+=Math.floor(bal/arr[i])
            bal = bal%arr[i]
        }
    }
    return count
};