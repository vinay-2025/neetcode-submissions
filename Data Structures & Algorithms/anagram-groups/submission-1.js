class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let group = new Map()
        for(let i=0;i<strs.length;i++){
            //let sortedWord = strs[i].split("").sort().join("")
            const word =strs[i]
            const count = new Array(26).fill(0);
            for(let char of word){
                count[char.charCodeAt(0)-97]++
            }
            const key = count.join("#");
            if(!group.has(key)){
                group.set(key,[])
            }
            group.get(key).push(word)
        }
        return [...group.values()]
    }
}
