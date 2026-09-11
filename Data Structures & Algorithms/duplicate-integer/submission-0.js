class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let unqiue = [...new Set(nums)]
        return unqiue.length !==nums.length
    }
}
