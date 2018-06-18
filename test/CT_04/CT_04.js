const should = require('should');
const { solveEquation, getGrade, getGradeWithTest, getGradeWithAverage } = require('../../src/CT_04/CT_04');

describe('CT_04_if', () => {
    describe('Solve Equation', () => {
        it('두근이 실수일 때', () => {
            const a = 1;
            const b = 2;
            const c = -3;
            const expected = [-3, 1];

            const result = solveEquation(a, b, c);
            should.deepEqual(result, expected);
        });
        it('하나의 근만 존재할 때', () => {
            const a = 1;
            const b = 2;
            const c = 1;
            const expected = [-1];

            const result = solveEquation(a, b, c);
            should.deepEqual(result, expected);
        });

        it('근이 없을 때', () => {
            const a = 1;
            const b = 2;
            const c = 4;
            const expected = null;

            const result = solveEquation(a, b, c);
            should.deepEqual(result, expected);
        });
    });

    describe('getGrade', () => {
        it('100 = : \'A\'', () => {
            const grade = 100;
            const expected = 'A';

            should.equal(getGrade(grade), expected);
        });

        it('90 > : \'B\'', () => {
            const grade = 85;
            const expected = 'B';

            should.equal(getGrade(grade), expected);
        });

        it('80 > : \'C\'', () => {
            const grade = 72;
            const expected = 'C';

            should.equal(getGrade(grade), expected);
        });

        it('70 > : \'D\'', () => {
            const grade = 64;
            const expected = 'D';

            should.equal(getGrade(grade), expected);
        });

        it('60 > : \'F\'', () => {
            const grade = 33;
            const expected = 'F';

            should.equal(getGrade(grade), expected);
        });
    });

    describe('getGradeWithTest', () => {
        it('100 P : \'A\'', () => {
            const grade = 100;
            const testResult = true;
            const expected = 'A';

            should.equal(getGradeWithTest(grade, testResult), expected);
        });

        it('100 F : \'B\'', () => {
            const grade = 100;
            const testResult = false;
            const expected = 'B';

            should.equal(getGradeWithTest(grade, testResult), expected);
        });

        it('75 F : \'D\'', () => {
            const grade = 75;
            const testResult = true;
            const expected = 'D';

            should.equal(getGradeWithTest(grade, testResult), expected);
        });

        it('63 F : \'F\'', () => {
            const grade = 63;
            const testResult = false;
            const expected = 'F';

            should.equal(getGradeWithTest(grade, testResult), expected);
        });

        it('50 P: \'F\'', () => {
            const grade = 50;
            const testResult = true;
            const expected = 'F';

            should.equal(getGradeWithTest(grade, testResult), expected);
        });

        it('92 F: \'B\'', () => {
            const grade = 92;
            const testResult = false;
            const expected = 'B';

            should.equal(getGradeWithTest(grade, testResult), expected);
        });
    });


    describe('gradeWithAverage', () => {
        it('98 95 P: \'A+\'', () => {
            const grade1 = 98;
            const grade2 = 95;
            const testResult = true;
            const expected = 'A+';

            should.deepEqual(getGradeWithAverage(grade1, grade2, testResult), expected);
        });

        it('69 81 P: \'C+\'', () => {
            const grade1 = 69;
            const grade2 = 81;
            const testResult = true;
            const expected = 'C+';

            should.deepEqual(getGradeWithAverage(grade1, grade2, testResult), expected);
        });

        it('80 89 F: \'C0\'', () => {
            const grade1 = 80;
            const grade2 = 89;
            const testResult = true;
            const expected = 'C0';

            should.deepEqual(getGradeWithAverage(grade1, grade2, testResult), expected);
        });

        it('59 70 P: \'D-\'', () => {
            const grade1 = 59;
            const grade2 = 70;
            const testResult = true;
            const expected = 'D-';

            should.deepEqual(getGradeWithAverage(grade1, grade2, testResult), expected);
        });

        it('59 69 F: \'F\'', () => {
            const grade1 = 59;
            const grade2 = 69;
            const testResult = true;
            const expected = 'F';

            should.deepEqual(getGradeWithAverage(grade1, grade2, testResult), expected);
        });
    });
});
