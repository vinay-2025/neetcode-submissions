class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let record = {}
        for(let i=0;i<nums.length;i++){
            if(record[nums[i]]){
                return true
            }else{
                record[nums[i]]=1
            }
        }
        return false
    }
}
