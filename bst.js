// convert a sorted array to a binary search tree
// #108 Leetcode 

// for this one we will use recursion to traverse the array and pass the tests. 

// o(n) time complexity - o(n) space complexity

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// o(n) time complexity - o(n) space complexity
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */


var sortedArrayToBST = function(nums, left = 0, right = nums.length - 1) {  
    if (left > right) return null;

    let mid = Math.floor((left + right) / 2);
    let root = new TreeNode(nums[mid]);
}


const array = [-100, -50, 0, 50, 100];
console.log(sortedArrayToBST(array))



    


root.left = sortedArrayToBST(nums, left, mid - 1);
root.right = sortedArrayToBST(nums, mid + 1, right);

return root;