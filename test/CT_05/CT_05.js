const should = require('should');
const { evenSummation, drawStar } = require('../../src/CT_05/CT_05');

describe('CT_05_for', () => {
    describe('evenSummation', () => {
        it('2, 4 : 6', () => {
            const N1 = 2;
            const N2 = 4;
            const expected = 6;

            should.equal(evenSummation(N1, N2), expected);
        });

        it('3 8 : 18', () => {
            const N1 = 3;
            const N2 = 8;
            const expected = 18;

            should.equal(evenSummation(N1, N2), expected);
        });

        it('4 4 : 4', () => {
            const N1 = 4;
            const N2 = 4;
            const expected = 4;

            should.equal(evenSummation(N1, N2), expected);
        });

        it('3 3 : 0', () => {
            const N1 = 3;
            const N2 = 3;
            const expected = 0;

            should.equal(evenSummation(N1, N2), expected);
        });
    });

    describe('drawStar', () => {
        it('n = 5', () => {
            const n = 5;

            drawStar(n);
            should.ok(true);
        });

        it('n = 10', () => {
            const n = 10;

            drawStar(n);
            should.ok(true);
        });

        it('n = 0', () => {
            const n = 0;

            drawStar(n);
            should.ok(true);
        });

        it('n = 1', () => {
            const n = 1;

            drawStar(n);
            should.ok(true);
        });
    })
});
