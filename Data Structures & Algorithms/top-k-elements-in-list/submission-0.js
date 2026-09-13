class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let item = new Map()
        for (const num of nums) {
            item.set(num, (item.get(num) || 0) + 1);
        }
         const counts = Array.from(
        { length: nums.length + 1 },
        () => []
    );
        // item.forEach(key=>{
        //     counts[item.get(key)]=key
        // })
        item.forEach((frequency, num) => {
            counts[frequency].push(num)
        });
        let result = []
        for (let i = counts.length - 1; i >= 0; i--) {
            for (const num of counts[i]) {
                result.push(num)
                if (result.length === k) {
                    return result
                }
            }
        }

    }
}
