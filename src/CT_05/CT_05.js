exports.evenSummation = (N1, N2) => {
    // 9p. 짝수 합
    // 함수 evenSummation
    // (N1, N2) => N1 <= … <= N2 사이에 있는 짝수들의 합
    // 힌트에서 range라는 함수는 무시하세요 (python 내장함수라 javascript에는 없습니다)
    // 왜 안되는 것인가...조이님 도움 필요.
    let arr = [];
    let value = N1;
    let result = 0;
    while (value <= N2) {
        arr.push(value);
        value += 1;
    }
    for (let i = 0; i < arr.length; i += 1 ) {
        if (arr[i] % 2 === 0) {
            result += arr[i];
        } else {}
    }
    return result;
};

exports.drawStar = (n) => {
    // 10p. 별로 패턴 그리기
    // 함수 drawStar
    // (n) => 별
    // 10페이지 참고할것
    // print => console.log 사용하시면 됩니다.

    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 0; j < i; j++) {
            str += '*';
        }
        console.log(str);
        // console.log('\n');
        // console.log('/n');
    }
    // 반대로 찍기
    // for (let i = 1; i <= n; i++) {
    //     for (let j = n; j >= i; j--) {
    //         console.log('*')
    //     } console.log("/n")
    // }
};

exports.drawTriangle = (n) => {
    // if ( n % 2 === 0 ) {
    //     for (let i = 1; i <= n; i++) {
    //         for (let j = 0; j < i; j++) {
    //             console.log('*');
    //         }
    //         console.log('/n');
    //     }
    // } else {
    //     for (let i = 1; i <= n-1; i++) {
    //         for (let j = 0; j < i; j++) {
    //             console.log('*');
    //         }
    //         console.log('/n');
    //     }
    // }
    //범위 내
    if (n <= 10 || n > 0) {
        if ( n % 2 === 0 ) {
            for (let i = 1; i <= 10; i++) {
                let star = "";
                if (i <= n) {
                    for (let j = 1; j <= i; j++) {
                        star += '*';
                    } console.log(star)
                } else if (i > n) {
                    for (let j = 1; j <= 10 - i; j++) {
                        star += '*';
                    } console.log(star)
                }
            }
        } else {
            for (let i = 0; i < 10-1; i++) {
                let star = "";
                if (i <= n) {
                    for (let j = 0; j <= i; j++) {
                        star += '*';
                    } console.log(star)
                } else if (i > n) {
                    for (let j = 1; j <= 10-1 - i; j++) {
                        star += '*';
                    } console.log(star)
                }
            }
        }
    } else {
        return error;
    }};
