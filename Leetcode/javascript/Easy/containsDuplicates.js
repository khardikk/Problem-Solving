// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 https://leetcode.com/problems/contains-duplicate/

// Solution
/**
 * Brute Force - Linear Search
 * Time O(N^2) | Space O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
    for (let right = 0; right < nums.length; right++) {/* Time O(N) */
        for (let left = 0; left < right; left++) {         /* Time O(N) */
            const isDuplicate = nums[left] === nums[right];
            if (isDuplicate) return true;
        }
    }

    return false;
}

/**
 * Sort - HeapSort Space O(1) | QuickSort Space O(log(N))
 * Time O(N * log(N)) | Space O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
    nums.sort((a, b) => a - b);/* Time O(N * log(N)) | Space O(1 || log(N)) */

    return hasDuplicate(nums);
}

const hasDuplicate = (nums) => {
    for (let curr = 0; curr < (nums.length - 1); curr++) {/* Time O(N) */
        const next = (curr + 1);

        const isNextDuplicate = nums[curr] === nums[next];
        if (isNextDuplicate) return true;
    }

    return false;
}

/**
 * Hash Set
 * Time O(N) | Space O(N)
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const numsSet = new Set(nums);
  return numsSet.size !== nums.length;
};
// we create a set (numsSet) directly from the input array nums. Then, 
// we compare the size of the set with the length of the input array. If they are not equal, it means there are duplicate elements, 
//   so we return true. Otherwise, we return false.

/**
 * Hash Set - Early Exit
 * Time O(N) | Space O(N)
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums, numsSet = new Set()) => {
    for (const num of nums) {/* Time O(N) */
        if (numsSet.has(num)) return true;

        numsSet.add(num);       /* Space O(N) */
    }

    return false;
};
