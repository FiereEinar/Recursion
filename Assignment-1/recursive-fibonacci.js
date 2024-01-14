/**
 * The recursive solution to the fibonacci sequence question!
 * @param {number} num : Getting the number of elements
 * @returns The array of elements of the fibonacii sequence
 */

function fibsRec(num, array) {
    if (num <= 0) return 'Enter a valid number';
    if (num <= 1) return [0];

    const arr = array || [0, 1];
    if (arr.length == num) return arr;

    arr[arr.length] = arr[arr.length - 1] + arr[arr.length - 2];
    return fibsRec(num, arr);
}

console.log(fibsRec(-2)); // returns "Enter a valid number"
console.log(fibsRec(1)); // returns "Enter a valid number"
console.log(fibsRec(2)); // returns [0, 1]
console.log(fibsRec(3)); // returns [0, 1, 1]
console.log(fibsRec(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]