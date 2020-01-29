function getMiddle(s) {
    //Code goes here!
    return s.substr(s.length - 1 >>> 1, (~s.length & 1) + 1);
}

console.log(getMiddle('CodeSaitama'));
