// //1.creating an array with given length
let n=5;
let arr=[];
for(let i=0;i<n;i++){
    arr[i]=i*2;
}
console.log(arr);

// 2.implement queue with array 
const queue = [];
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6);
const dequeuedItem = queue.shift(); 
console.log(queue);

// 3.implement stack with array
const stack = [];
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
const poppedItem = stack.pop();
console.log(stack);

//4.array of object sorting with multiple properties
const arr = [
    { name: 'ajay', age: 20},
    { name: 'tom', age: 30},
    { name: 'sam', age: 18},
    { name: 'ram', age: 30 }
];
arr.sort((a, b) => {
    if (a.age < b.age) 
        return -1;
    if (a.age > b.age) 
        return 1;
});
console.log(arr);
//5.creating array of arrays
const arrayOfArrays = [];
arrayOfArrays.push([1, 2, 3]);
arrayOfArrays.push([4, 5, 6]);
arrayOfArrays.push([7, 8, 9]);
console.log(arrayOfArrays);


