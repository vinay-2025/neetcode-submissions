class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let record = new Map()
        for(let i=0;i<nums.length;i++){
            if(record.has(nums[i])){
                return [record.get(nums[i]),i]
            }else{
                let a = target - nums[i]
                record.set(a,i)
            }
        }
        return [0,0]
    }
}
