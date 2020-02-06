function XO(str) {
    let x = [];
    let o = [];
    let s = [];
    str.split('').forEach(element => {
        element.toLowerCase() == 'x' ? x.push(element) : element.toLowerCase() == 'o' ? o.push(element) : s.push(element);
    });
    return x.length === o.length ? true : x.length == 0 && o.length == 0 ? false : false;
}

const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}


console.log(XO('dgh'))