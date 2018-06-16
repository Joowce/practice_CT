
exports.solveEquation = (a, b, c) => {
    let D = (Math.pow(b,2)) - 4 * a * c;
    if (D > 0) {
        D = Math.sqrt(D);
        const root1 = (-b + D) / 2 * a;
        const root2 = (-b - D) / 2 * a;
        return [root1, root2];
    } else if (D === 0) {
        const result = -b / 2 * a;
        return "중근 =" + result;
    } else {
        return "근이 없음 = " + 'NULL';
    }
    // 9p. 이차방정식 근 제대로 구하기
    // 함수 solveEquation
    // (a,b,c) => 두근이 존재하면 [작은근, 큰근]
    // 근이 하나이면 [중근]
    // 없으면 null



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
    if (grade > 90 && testResult === true ) {
        return 'A'
    } else if (grade > 90 && testResult === false) {
        return 'B'
    } else if (grade > 80 && grade < 89 && testResult === true) {
        return 'B'
    } else if (grade > 80 && grade < 89 && testResult === false) {
        return 'C'
    } else if (grade > 70 && grade < 79 && testResult === true) {
        return 'C'
    } else if (grade > 70 && grade < 79 && testResult === false) {
        return 'D'
    } else if (grade > 60 && grade < 69 && testResult === true) {
        return 'D'
    } else if (grade > 60 && grade < 69 && testResult === false) {
        return 'F'
    }else if (grade < 59) {
        return 'F'
    }
};

exports.getGradeWithAverage = (grade1, grade2, testResult) => {

};
