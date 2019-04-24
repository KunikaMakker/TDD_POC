const leapYear = require('./leap_year');
describe('test', () => { //describe creates the test suite
    it('should return true if year is leap year', () => {
        expect(leapYear(2004)).toBeTruthy();
    })
    it('should return false when century years is not a leapyear', () => {
        expect(leapYear(1900)).toBeFalsy();
    })
    it('should throw error when function is called invalid type of error arguments', () => {
        expect(() => {
            leapYear('ahgs')
        }).toThrow();
    })
    it('should function is called more than one argument', () => {
        expect(() => {leapYear(1,2)}).toThrow();
    })
    
});