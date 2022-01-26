// convert a sorted array to a binary search tree

// o(n) time complexity - o(n) space complexity

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null)
}

const arrayToBST = (nums, left = 0, right = nums.length - 1) => {
    if (left > right) return null;
    
    let mid = Math.floor((left + right) / 2);
    let root = new TreeNode(nums[mid]);

    root.left = arrayToBST(nums, left, mid - 1);
    root.right = arrayToBST(nums, mid + 1, right);

    return root;
}
const array = [-100, -50, 0, 50, 100];
console.log(arrayToBST(array))