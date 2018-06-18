const should = require('should');
const { getGCD, getDigit, fixedDeposit } = require('../../src/CT-06/CT-06');

describe('CT-06', () => {
    describe('Get GCD', () => {
        it('100 25: 25', () => {
            const N1 = 100;
            const N2 = 25;
            const expected = 25;

            should.equal(getGCD(N1, N2), expected);
        });

        it('2983 6984: 1', () => {
            const N1 = 2983;
            const N2 = 6984;
            const expected = 1;

            should.equal(getGCD(N1, N2), expected);
        });

        it('966 873: 3', () => {
            const N1 = 966;
            const N2 = 873;
            const expected = 3;

            should.equal(getGCD(N1, N2), expected);
        });

        it('28 320: 4', () => {
            const N1 = 28;
            const N2 = 320;
            const expected = 4;

            should.equal(getGCD(N1, N2), expected);
        });
    });

    describe('Get Digit', () => {
        it('0003425: 4', () => {
            const N = '0003425';
            const expected = 4;

            should.equal(getDigit(N), expected);
        });

        it('000: 1', () => {
            const N = '000';
            const expected = 1;

            should.equal(getDigit(N), expected);
        });

        it('0012087: 5', () => {
            const N = '0012087';
            const expected = 5;

            should.equal(getDigit(N), expected);
        });

        it('4302700: 7', () => {
            const N = '4302700';
            const expected = 7;

            should.equal(getDigit(N), expected);
        });
    });

    describe('fixed Deposit', () => {
        it('1000 3 1150: 5', () => {
            const M = 1000;
            const R = 3;
            const S = 1150;
            const expected = 5;

            should.equal(fixedDeposit(M, R, S), expected);
        });

        it('2000 3.5 10000: 47', () => {
            const M = 2000;
            const R = 3.5;
            const S = 10000;
            const expected = 47;

            should.equal(fixedDeposit(M, R, S), expected);
        });

        it('1500 6 3500: 15', () => {
            const M = 1500;
            const R = 6;
            const S = 3500;
            const expected = 15;

            should.equal(fixedDeposit(M, R, S), expected);
        });
    });
});
