function rowSumOddNumbers(n) {
    let nBeforeCount = (n - 1) * n / 2;
    let firstNumber = nBeforeCount * 2 + 1;
    let lastNumber = firstNumber + 2 * (n - 1);
    return n * (firstNumber + lastNumber) / 2;
};

console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(42));