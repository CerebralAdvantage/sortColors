// Original values are moved
var sortColors = function(nums) {
  let colors = [0,1]; // one less than actual number of colors
  let first=0, last=nums.length-1;
  colors.forEach((i) => {
    while(first<last) { // filter each color (i) from remaining colors
      while(nums[last] > i) { last--; }
      while(nums[first] === i) { first++; }
      [nums[last],nums[first]] = [nums[first], nums[last]]; // swap
    }
    [nums[last],nums[first]] = [nums[first], nums[last]]; // undo last swap
    last = nums.length-1; // reset last; first stays put from previos iteration
  });
};

let i, mynums = []; // [2,1,0];
for(i=0;i<96;i++) mynums.push(Math.trunc(Math.random()*3))
console.log(mynums)
sortColors(mynums)
console.log(mynums)

// count 0's, 1's, & 2's
//let x = [0,0,0];
//for(i=0;i<mynums.length;i++) x[mynums[i]]++;
//console.log(x)

// let mn = []
// for(i=0;i<10000;i++) mn.push(Math.trunc(Math.random()*3))
// sortColors(mn)

// This doesn't *feel* like the Dutch National Flag solution... but it might be.
// O(n) time, O(1) space... technically, O(5/3n) time

