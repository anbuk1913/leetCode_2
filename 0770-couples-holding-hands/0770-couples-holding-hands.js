/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
    let count=0
    for(let i=1;i<row.length;i++){
        if(row[i-1]%2==0){
            let num = row[i-1]
            if(row[i] == num+1){
                i++
                continue
            } else {
                count++
                let tem = i
                while(row[tem]!=num+1){
                tem++
                }
                let t = row[i]
                row[i] = row[tem]
                row[tem] = t
                i++
            }
        } else {
            let num = row[i-1]
            if(row[i] == num-1){
                i++
                continue
            } else {
                count++
                let tem = i
                while(row[tem]!=num-1){
                    tem++
                }
                let t = row[i]
                row[i] = row[tem]
                row[tem] = t
                i++
            }
        }
    }
    return count
};