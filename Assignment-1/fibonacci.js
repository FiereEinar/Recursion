/**
 * The non-recursive solution to the fibonacci sequence question!
 * @param {number} num : Getting the number of elements
 * @returns The array of elements of the fibonacii sequence
 */

function fibs(num) {
    if (num <= 0) return "Please provide a non empty array!"
    if (num === 1) return [0];

    const arr = [0, 1];

    for (let i = 2; i <= num - 1; i++) {
        arr[i] = arr[arr.length - 1] + arr[arr.length - 2];
    }
    return arr;
}

console.log(fibs(-2)); // returns "Please enter a valid number of elements to be given an answer."
console.log(fibs(1)); // returns [0]
console.log(fibs(2)); // returns [0, 1]
console.log(fibs(3)); // returns [0, 1, 1]
console.log(fibs(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]