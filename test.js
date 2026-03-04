

function selfNumber(n) {
    let sum = n;
    let temp = n;
    while (temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }
    return sum;
}


function selfNumber2(n) {
    const set = new Set();
    for (let i = 1; i <= n; i++) {
        const result = selfNumber(i);
        if (result <= n) {
            set.add(result);
        }
    }

    let totalSum = 0;
    const selfNumbers = [];

    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) {
            selfNumbers.push(i);
            totalSum += i;
        }
    }
    return { selfNumbers, totalSum };
}

const result = selfNumber2(5000)

console.log(JSON.stringify(result))