
exports.solveEquation = (a, b, c) => {
    let D = (Math.pow(b, 2)) - 4 * a * c;
    if (D > 0) {
        D = Math.sqrt(D);
        const root1 = (-b + D) / 2 * a;
        const root2 = (-b - D) / 2 * a;
        return [root2, root1];
    } else if (D === 0) {
        const output = -b / 2 * a;
        return [output];
    } else {
        return null;
    }
    // 9p. 이차방정식 근 제대로 구하기
    // 함수 solveEquation (a,b,c)
    // 두근이 존재하면
    // => [작은근, 큰근]
    // 근이 하나이면
    // => [중근]
    // => a=1, b= -2, c= 1 이면 1로 나오고,
    // => a=1, b= 2, c= 1 이면 -1 나옴. 테스트케이스 확인필요
    // 없으면
    // => null



};

exports.getGrade = (grade) => {
    // 11p. 조건문 연습
    // 시험점수 입력 받아 학점 부여
    // 기준은 동일
    // 함수 getGrade
    // (grade) => 학점
    // 출력 : (string) ex) ‘A’, ’B’, …
    if (grade > 90) {
        return 'A'
    } else if (grade > 80 && grade < 89) {
        return 'B'
    } else if (grade > 70 && grade < 79) {
        return 'C'
    } else if (grade > 60 && grade < 69) {
        return 'D'
    } else if (grade < 59) {
        return 'F'
    }
};

exports.getGradeWithTest = (grade, testResult) => {
    // 함수 getGradeWithTest
    // (grade, testResult) => 학점
    // grade : String
    // testResult : true/false
    // 테스트 케이스가 잘못됨.
    // 100 F : B, 75 F : D 결과 맞는데 자꾸 오류나오네요...
    if (grade >= 90 && testResult === true ) {
        return 'A'
    } else if (grade >= 90 && testResult === false) {
        return 'B'
    } else if (grade >= 80 && grade < 90 && testResult === true) {
        return 'B'
    } else if (grade >= 80 && grade < 90 && testResult === false) {
        return 'C'
    } else if (grade >= 70 && grade < 80 && testResult === true) {
        return 'C'
    } else if (grade >= 70 && grade < 80 && testResult === false) {
        return 'D'
    } else if (grade >= 60 && grade < 70 && testResult === true) {
        return 'D'
    } else if (grade >= 60 && grade < 70 && testResult === false) {
        return 'F'
    } else if (grade < 60 && (testResult === true || testResult === false)) {
        return 'F'
    }
};

exports.getGradeWithAverage = (grade1, grade2, testResult) => {
    const M = (grade1 + grade2) / 2;
    const checkBothAbove = (grade, P1, P2) => {
        return P1 >= grade && P2 >= grade;
    };

    if (M >= 95) {
        return 'A+'
    } else if (M >= 90 && testResult) {
        return checkBothAbove(90, grade1, grade2) ? 'A0' : 'A-';
    } else if (M >= 85 && testResult) {
        return 'B+'
    } else if (M >= 80 && (grade1 >= 80 && grade2 >= 80) && testResult) {
        return 'B0'
    } else if (M >= 80 && (grade1 > 80 || grade2 > 80) && testResult) {
        return 'B-'
    } else if (M >= 75 && testResult) {
        return 'C+'
    } else if (M >= 70 && (grade1 >= 70 && grade2 >= 70) && testResult) {
        return 'C0'
    } else if (M >= 70 && (grade1 > 70 || grade2 > 70) && testResult) {
        return 'C-'
    } else if (M >= 65 && testResult) {
        return 'D+'
    } else if (M >= 60 && (grade1 >= 60 && grade2 >= 60) && testResult) {
        return 'D0'
    } else if (M >= 60 && (grade1 > 60 || grade2 > 60) && testResult) {
        return 'D-'
    } else if (M < 60 && (testResult === true || testResult === false)){
        return 'F'
    } else if (M < 60 && testResult){
        return 'F'
    } else if (M >= 95 && testResult === true) {
        return 'A+'
    } else if (M >= 90 && (grade1 >= 90 && grade2 >= 90) && testResult === true) {
        return 'A0'
    } else if (M >= 90 && (grade1 > 90 || grade2 > 90) && testResult === true) {
        return 'A-'
    } else if (M >= 85 && testResult === true) {
        return 'B+'
    } else if (M >= 80 && (grade1 >= 80 && grade2 >= 80)&& testResult === true) {
        return 'B0'
    } else if (M >= 80 && (grade1 > 80 || grade2 > 80)&& testResult === true) {
        return 'B-'
    } else if (M >= 75 && testResult === true) {
        return 'C+'
    } else if (M >= 70 && (grade1 >= 70 && grade2 >= 70) && testResult === true) {
        return 'C0'
    } else if (M >= 70 && (grade1 > 70 || grade2 > 70) && testResult === true) {
        return 'C-'
    } else if (M >= 65 && testResult === true) {
        return 'D+'
    } else if (M >= 60 && (grade1 >= 60 && grade2 >= 60) && testResult === true) {
        return 'D0'
    } else if (M >= 60 && (grade1 > 60 || grade2 > 60) && testResult === true) {
        return 'D-'
    } else if (M >= 95 && testResult === false) {
        return 'B+'
    } else if (M >= 90 && (grade1 >= 90 && grade2 >= 90) && testResult === false) {
        return 'B0'
    } else if (M >= 90 && (grade1 > 90 || grade2 > 90) && testResult === false) {
        return 'B-'
    } else if (M >= 85 && testResult === false) {
        return 'C+'
    } else if (M >= 80 && (grade1 >= 80 && grade2 >= 80) && testResult === false) {
        return 'C0'
    } else if (M >= 80 && (grade1 > 80 || grade2 > 80) && testResult === false) {
        return 'C-'
    } else if (M >= 75 && testResult === false) {
        return 'D+'
    } else if (M >= 70 && (grade1 >= 70 && grade2 >= 70) && testResult === false) {
        return 'D0'
    } else if (M >= 70 && (grade1 > 70 || grade2 > 70 )&& testResult === false) {
        return 'D-'
    } else if (M >= 65 && testResult === false) {
        return 'F'
    } else if (M >= 60 && (grade1 >= 60 && grade2 >= 60) && testResult === false) {
        return 'F'
    } else if (M >= 60 && (grade1 > 60 || grade2 > 60) && testResult === false) {
        return 'F'
    }
};
