// subtract the number and push it to array until it reaches 0 to get the set;
const getSet = (number) => {
  const set = [];
  while(number > 0) {
    set.push(number);
    number--;
  }
  return set;
}

const getSubsets = (mainSet) => {
  // reduce function takes 2 params, first a function with 2 params "subsets" as previous value and "value" as current value,
  // second the inital set which is an empty set "[[]]"
  return mainSet.reduce(
    (subsets, value) => {
      // concat fucntion takes a value and concatinates it with the previous value which is subsets returned from map function in this case
      return subsets.concat(
        // map function takes a function as a callback and iterates over the subsets produced by reduce function,
        // then generates the next round of subsets using the current value of reduce function by using the spread operator
        subsets.map(
          (set) => {
            return [value,...set]
          }
        )
      )
    },
    [[]]
  )
};

const getSum = (subsets) => {
  const subsetsLenght = subsets.length;
  let sum = 0;
  // iterate over the subsets array and foreach subset add the element to the sum
  for(let i = 1; i < subsetsLenght; i++) { // i starts from 1 because our first set is an empty set from the reduced function
    subsets[i].forEach(element => {
      sum += element;
    });
  }

  return sum;
}

const set = getSet(3); // pass the number you want to find the sum of the power set of number
const subsets = getSubsets(set);
const sum = getSum(subsets);
console.log(sum)

module.exports = {
  getSet,
  getSubsets,
  getSum
};


