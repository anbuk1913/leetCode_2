/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    let arr = []
    for(let i=0;i<score.length;i++){
        arr.push(score[i][k])
    }
    
    for(let i=1;i<arr.length;i++){
        let tem = score[i]
        let curr = arr[i]
        let j = i-1
        while(j>=0 && arr[j]<curr){
            score[j+1] = score[j]
            arr[j+1] = arr[j--]
        }
        score[j+1] = tem
        arr[j+1]=curr
    }
    return score
};