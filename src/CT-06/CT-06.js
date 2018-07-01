exports.getGCD = (N1, N2) => {
    // (N1, N2) => N1와 N2의 최대공약수, 유클리드 호제법 사용할 것
    if(N1 < N2){
        let tmp = N1;
        N1 = N2;
        N2 = tmp;
    }
    while(N2 !== 0){
        let r = N1 % N2;
        N1 = N2;
        N2 = r;
    }
    return N1;
};

exports.getDigit = (N) => {
// ## 11p. 주어진 정수의 자릿수 구하기
//     (N) => digit
//     이때 N은 문자열!
//     `N = str(int(N));` 사용 금지
    let val = N.toString();
    let arr = val.split("");
    let check = "";
    for (let i = 0; i < arr.length; i+=1) {
        if (arr[i] > 0) {
            check = i;
            break
        }
    }
    //앞에 0이 몇개가 있는지 체크했음.
    // console.log(check);
    //앞에 0의 개수가 0개면,
    //앞에 0의 개수가 ""이면 다시말해 정수가 없으면,
    //앞에 0의 개수가 0보다 크면,
    if (check === 0) {
        return arr.length
    } else if (check === "") {
        return 1
    } else {
        let newLen = arr.length - check;
        return newLen;
    }
};

exports.fixedDeposit = (M, R, S) => {
    let rate = R / 100;
    let Y = 0;

    while ( M <= S ) {
        console.log(rate);
        Y += 1;
        M = M * (1 + rate);
        console.log(M);
    }
    return Y;
};
