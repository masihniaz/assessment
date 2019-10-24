
const findSubsetSum = (number) => {
  // every number from 1 to n appears as 2^(n-1) times
  // the required sum is (1 + 2 + 3 + ... + n) * 2 ^ (n-1)
  // therefore, it can be writen as (n * (n + 1) / 2) * 2 ^ (n-1)
  return (number * (number + 1) / 2) * Math.pow(2, (number -1));
}

const sum = findSubsetSum(3) // pass the number you want to find the sum of the power set of number
console.log(sum);

module.exports = {
  findSubsetSum
};