/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
  let t=0
  s=s.split('')
  for(let i=1;i<s.length;i++){
    if(s[0]==s[i])t++
  }

  for(let i=0;i<s.length;i++){
    let count=0
    for(let j=i+1;j<s.length;j++){
      if(s[i]==s[j]){
        count++
        s.splice(j,1)
        j--
      }
    }
    if(count==t){
      s.splice(0,1)
      i--
    } else {
      return false
    }
  }
  return true
};