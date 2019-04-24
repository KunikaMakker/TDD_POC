const primeFactor = require('./prime_factor');
describe('Function: Prime Factors', () => {
    it('should return empty array when number is 1', () =>{
        expect(primeFactor(1)).toEqual([]);
    })
    it('should return [2] when number is 2', () =>{
        expect(primeFactor(2)).toEqual([2]);
    })
    it('should return array of same number when number is prime', () =>{
        expect(primeFactor(17)).toEqual([17]);
    })
    it('should return [2,2,2,2] when number is 16', () =>{
        expect(primeFactor(16)).toEqual([2,2,2,2]);
    })
    it('should return [3,3,11] when number is 99', () =>{
        expect(primeFactor(99)).toEqual([3,3,11]);
    })
})