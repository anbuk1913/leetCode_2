/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    let zc = 0
    let oc = 0
    let temZ = 0
    let temO = 0
    for(let i=0;i<s.length;i++){
        if(s[i]=="0"){
            temO = 0
            temZ++
        } else {
            temZ = 0
            temO++
        }
        if(zc<temZ){
            zc = temZ
        }
        else if(oc<temO){
            oc=temO
        }
    }
    return oc>zc
};