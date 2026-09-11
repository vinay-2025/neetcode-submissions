class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let group = new Map()
        for(let i=0;i<strs.length;i++){
            let sortedWord = strs[i].split("").sort().join("")
            if(!group.has(sortedWord)){
                group.set(sortedWord,[])
            }
            group.get(sortedWord).push(strs[i])
        }
        return [...group.values()]
        // return null
    }
}
