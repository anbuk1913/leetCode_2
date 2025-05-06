/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    let a = Math.floor(n/2)
    let b = n-a
    while(true){
        let tem1 = String(a)
        let tem2 = String(b)
        let t = true
        for(let i=0;i<tem1.length;i++){
            if(tem1[i]=="0"){
                t = false
                break
            }
        }
        if(t){
            for(let i=0;i<tem2.length;i++){
                if(tem2[i]=="0"){
                    t = false
                    break
                }
            }
        }
        if(t){
            return [a,b]
        } else {
            a++
            b--
        }
    }
};