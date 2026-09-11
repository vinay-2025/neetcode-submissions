class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false;
let isValidAnagram = true
        let record = {};
        for(let i=0;i<s.length;i++){
            if(record[s[i]]){
                record[s[i]]=record[s[i]]+1
            }else{
                record[s[i]] =1
            }
        }
        for(let j=0;j<t.length;j++){
            if(record[t[j]]){
                record[t[j]]=record[t[j]]-1
                if(record[t[j]]===0){
                    delete record[t[j]]; 
                }
            }else{
                isValidAnagram =false
                break;
            }
        }
        if(record.length>0) return false
        return isValidAnagram
    }
}
