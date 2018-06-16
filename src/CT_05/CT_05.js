exports.evenSummation = (N1, N2) => {
    // 9p. 짝수 합
    // 함수 evenSummation
    // (N1, N2) => N1 <= … <= N2 사이에 있는 짝수들의 합
    // 힌트에서 range라는 함수는 무시하세요 (python 내장함수라 javascript에는 없습니다)
    const arr = [N1];
    let value = '';
    while (N1 <= N2) {
        N1 =+ 1;
        arr.push(N1);
    }
    for (let i = 0; i < arr.length; i =+1) {
        if (arr[i]%2 === 0) {
            value =+ arr[i];
        }
    }
    console.log(value);
};

exports.drawStar = (n) => {
    // 10p. 별로 패턴 그리기
    // 함수 drawStar
    // (n) => 별
    // 10페이지 참고할것
    // print => console.log 사용하시면 됩니다.
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            console.log('*');
        }
        console.log('/n');
    }
    //반대로 찍기
    // for (let i = 1; i <= n; i++) {
    //     for (let j = n; j >= i; j--) {
    //         console.log('*')
    //     } console.log("/n")
    // }
};
