// ------------1----------

const arr = [1, 2, 3];
arr[1] = 10;
console.log(arr);

// ------------2----------

const arr1 = ["Mango", "Kiwi", "Orange"];
arr1.push("Apple");
console.log(arr1);

// ------------3----------

const nums = [1, 5, 7, 15];
let sum = 0;

for (let i = 0; i < nums.length; i++){
    sum += nums[i];
}
console.log(sum);

// ------------4----------

const nums2 = [1, 2, 3, 4, 5];

for (let i = 0; i < nums2.length; i++){
    console.log(nums2[i]);
}

// ------------5----------

const arr2 = ["Mango", "Kiwi", "Orange", "Apple", "Berry"];

for (let i = 0; i < arr2.length; i++){
    if (arr2[i].length > 5) {
        console.log(arr2[i]);
    }
}

// ------------6----------

const nums3 = [51, 18, 64, 25, 69, 68, 46, 15, 75, 94];
let max = 0;

for (let i = 0; i < nums3.length; i++){
    if (nums3[i] > max) {
        max = nums3[i];
    }
}

console.log(max);

// ------------7----------

let evenNum = [];

for (let i = 0; i < nums3.length; i++){
    if (nums3[i] % 2 == 0) {
        evenNum.push(nums3[i]);
    }
}
console.log(evenNum);