/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let tem = []
    if(list1.length<list2.length){
        for(let i=0;i<list2.length;i++)tem[i]=-1
    } else {
        for(let i=0;i<list1.length;i++)tem[i]=-1
    }

    let min = Infinity
    for(let i=0;i<list1.length;i++){
        for(let j=0;j<list2.length;j++){
            if(list1[i]==list2[j]){
                if(list1.length<list2.length){
                    tem[j] = i+j
                } else {
                    tem[i] = i+j
                }
                if(i+j<min)min=i+j
            }
        }
    }
    let ans = []
    for(let i=0;i<tem.length;i++){
        if(tem[i]==min){
            if(list1.length<list2.length){
                ans.push(list2[i])
            } else {
                ans.push(list1[i])
            }
        }
    }
    return ans
};