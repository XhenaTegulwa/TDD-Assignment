import { assert } from 'chai';
import { multiply } from '../src/multiply';

describe('Testing the return values of the multiply function', () => {
    it('Testing the return value of multiplying 1,1', () => {
        assert.equal(multiply(1, 1), 1, 'The result should be 1');
    });

    it('Testing the return value of multiplying 2,3', () => {
        assert.equal(multiply(2, 2), 1, 'The result should be 4');
    });
});
