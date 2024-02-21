const assert = require('assert');
const arrayUtils = require('./index.js');

console.log('\nTesting findMax function...');
console.log('findMax([1, 5, 3, 9, 2]):', arrayUtils.findMax([1, 5, 3, 9, 2])); 
console.log('findMax([10, 20, 30]):', arrayUtils.findMax([10, 20, 30])); 

console.log('\nTesting findMin function...');
console.log('findMin([1, 5, 3, 9, 2]):', arrayUtils.findMin([1, 5, 3, 9, 2])); 
console.log('findMin([10, 20, 30]):', arrayUtils.findMin([10, 20, 30])); 

console.log('\nTesting areAllNumbers function...');
console.log('areAllNumbers([1, 2, 3, 4, 5]):', arrayUtils.areAllNumbers([1, 2, 3, 4, 5])); 
console.log('areAllNumbers([1, "2", 3, 4, 5]):', arrayUtils.areAllNumbers([1, '2', 3, 4, 5])); 

console.log('\nTesting reverseArray function...');
console.log('reverseArray([1, 2, 3, 4, 5]):', arrayUtils.reverseArray([1, 2, 3, 4, 5])); 
console.log('reverseArray(["a", "b", "c"]):', arrayUtils.reverseArray(['a', 'b', 'c'])); 

console.log('\nTesting shuffleArray function...');
console.log('shuffleArray([1, 2, 3, 4, 5]):', arrayUtils.shuffleArray([1, 2, 3, 4, 5])); 
console.log('shuffleArray(["a", "b", "c"]):', arrayUtils.shuffleArray(['a', 'b', 'c']));

console.log('\nTesting containsElement function...');
console.log('containsElement([1, 2, 3, 4, 5], 3):', arrayUtils.containsElement([1, 2, 3, 4, 5], 3));
console.log('containsElement(["a", "b", "c"], "d"):', arrayUtils.containsElement(['a', 'b', 'c'], 'd')); 

console.log('\nTesting getUniqueElements function...');
console.log('getUniqueElements([1, 2, 2, 3, 3, 4]):', arrayUtils.getUniqueElements([1, 2, 2, 3, 3, 4])); 
console.log('getUniqueElements([10, 20, 10, 30, 20]):', arrayUtils.getUniqueElements([10, 20, 10, 30, 20]));

console.log('\nAll tests passed successfully!');
