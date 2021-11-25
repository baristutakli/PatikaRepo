

//Algorithms

//BinarySearch

/*
Time complexity o(logn), space complexity: o(1) so  
*/
let nums = [2,7,8,9,10,12,23,45,66,78]

function BinarySearch(array, target) {
    let left =0
    let right = array.length-1;

    while (left<right) {
        let mid = Math.floor((left+right)/2);
        if (target === array[mid]) {
            return mid;
        }else if (target <array[mid]) {
            right = mid-1
        }else{
            left = mid +1;
        }        
    }
    return false;
    
}

console.log("The location of 7 :"+BinarySearch(nums,7));
console.log("The index of 45 :"+BinarySearch(nums,45));
console.log("----------- recursively------------->")
//Let's implement recursively

/*
Time complexity o(logn), space complexity: o(logn) so  
*/
let nums2 = [2,7,8,9,10,12,23,45,66,78]
function binarySearchRecursively(array, target) {
    return binarySearhHelper(array, target,0,array.length-1);
    
}
function binarySearhHelper(array, target,left,right) {
    if (left>right) {
        return false;
    }

    let mid = Math.floor((left+right)/2);
    if (target === array[mid]) {
        return mid;
    }else if (target <array[mid]) {
        return binarySearhHelper(array,target,left,mid-1)
    }else{
        return binarySearhHelper(array, target,mid+1,right)
    }        
  
}

console.log("The index of 7: "+BinarySearch(nums2,7));
console.log("The index of 45: "+BinarySearch(nums2,45));
console.log("---- Complex Recursion Explained Simply-------->")

// Complex Recursion Explained Simply


/**
 * Write a function 'sum' that tales an array
 * of numbers as an input. The function should return the total sum of all elements.
 * The function must be recrucive.
 */

// Each time we call sum(), we slice the first item in the array. To make your code faster, do not use slice method.

function sum(array) {

    if (array.length==0) return 0;
    const rest= array.slice(1)//returns an array. Creating a copy is gonna take O(n) time
    return array[0]+sum(rest)
}
console.log(sum([1,2,5,44,66,11],6))

// Time: O(n^2) Space: O(n)

console.log("---- Faster Way-------->")

const sumOfArray = (array) =>{
  return _sumOfArray(array,0);  
};
const _sumOfArray = (array,idx)=>{
    if (idx === array.length) return 0;
    return array[idx]+ _sumOfArray(array,idx+1) 
}
console.log(sumOfArray([1,2,5,44,66,11]))
// Time: O(n) Space: O(n)

console.log("---- Fibonacci-------->")
/**
 * Write a function 'fib' taht takes in a number, n, and returns the n-th number in the Fibonacci sequence.
 * The first two numbers of the fibonacci sequence are 1 and 1. calculated by taking the sum of previous two.
 */


const fib = (n)=>{
    if (n ==2 || n==1) return 1;
    return fib(n-1)+fib(n-2);
}
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))

// Combination algorithms

const combinations = (elements) => {
    if(elements.length ===0)return [[]];
    const firstEl = elements[0];
    const rest = elements.slice(1)

    const combsWithoutFirst = combinations(rest);
    const combsWithFirst=[]
    combsWithoutFirst.forEach(comb => {
        const combWithFirst = [...comb, firstEl];
        
    });
    return [...combsWithoutFirst,...combsWithFirst]
};
console.log(combinations(['a','b','c']));

// Permutations
const permutations = (elements) => {
    if (elements.length ===0)return [[]];
    const firstElement = elements[0]
    const rest = elements.slice(1);

    const permsWithoutFirst = permutations(rest);
    const allPermutations =[];
    permsWithoutFirst.forEach(perm => {
        for (let i = 0; i < perm.length; i++) {
            const permWithFirst = [...perm.slice(0,i),firstEl,...perm.slice(i)]
            
        }
    });
    return allPermutations;
}

// Time: O(n!)
// Space: O(n*n)

console.log(permutations(["a","b","c"]));
console.log(permutations(["b","c"]));