// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

// Using 2 loops 
class Solution {
public:
    int numIdenticalPairs(vector<int>& nums) {
    int count = 0;
        for(int i=0; i <nums.size(); i++){
            for(int j=1;j<nums.size();j++){
                if(nums[i]== nums[j] && i<j){
                    count ++;
                }
            }
        }

    return count;
    }
};


// fREQUENCY 
class Solution {
public:
    int numIdenticalPairs(vector<int>& A) {
        int res = 0;
        unordered_map<int, int> count;
        for (int a: A) {
            res += count[a]++;
        }
        return res;
    }
};
