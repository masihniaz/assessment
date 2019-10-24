const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const getSet = require('../subSetSumSolution1').getSet;
const getSubsets = require('../subSetSumSolution1').getSubsets;
const getSum = require('../subSetSumSolution1').getSum;
const findSubsetSum = require('../subSetSumSolution2').findSubsetSum;

describe('Assesment Test Suite', () => {

  describe('Subset sum solution 1', () => {
    
    it('getSet()', () => {

      const set =  getSet(3);
      assert.isArray(set);
      assert.lengthOf(set, 3);
      expect(set).to.eql([3, 2, 1]);
  
    });
  
    it('getSubsets()', () => {
      
      const subsets =  getSubsets([3, 2, 1]);
      assert.isArray(subsets);
      assert.lengthOf(subsets, 8);
      expect(subsets).to.eql([ [], [ 3 ], [ 2 ], [ 2, 3 ], [ 1 ], [ 1, 3 ], [ 1, 2 ], [ 1, 2, 3 ] ]);
  
  
    });
  
    it('getSum()', () => {
      
      let sum =  getSum([ [], [ 3 ], [ 2 ], [ 2, 3 ], [ 1 ], [ 1, 3 ], [ 1, 2 ], [ 1, 2, 3 ] ]);
      assert.isNumber(sum);
      expect(sum).to.be.equal(24);
  
    });

  });

  describe('Subset sum solution 2', () => {
    
    it('findSubsetSum()', () => {

      const sum =  findSubsetSum(3);
      assert.isNumber(sum);
      expect(sum).to.be.equal(24);
  
    });

  });

});