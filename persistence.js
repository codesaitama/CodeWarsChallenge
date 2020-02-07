function persistence(num) {
    let arr = num.toString().split('');
    let total = 1,
        count = 0;
    if (arr.length > 1) {
        arr.forEach(element => total *= element);
        count++;
        return total.toString().length > 1 ? count + persistence(total) : count;
    } else {
        return count;
    }
}

// Outside
const persistence = num => {
    return `${num}`.length > 1 ?
        1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) :
        0;
}

console.log(persistence(2345));
console.log(persistence(67));
console.log(persistence(5));
console.log(persistence(15));