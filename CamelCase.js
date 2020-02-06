function camelSentence(str) {

    const capitalize = data => data.charAt(0).toUpperCase() + data.toLowerCase().slice(1);

    let string = str.toLowerCase().replace(/-|_/g, ' ').replace(/^[A-Za-z0-9]/g, ' ').split(' ')
        .reduce((result, word) => result + capitalize(word.toLowerCase()));
    return string.charAt(0).toLowerCase() + string.slice(1);

}

function toCamelCase(str) {
    let s = ''
    if (/[a-zA-Z]/.test(str[0])) s = str[0];
    let opt = (" " + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function(match, chr) {
        return chr.toUpperCase();
    }).slice(1);
    return opt ? s + opt : ""
}

function toCamelCase(str) {
    var regExp = /[-_]\w/ig;
    return str.replace(regExp, function(match) {
        return match.charAt(1).toUpperCase();
    });
}

console.log(toCamelCase('the_stealth_warrior'))
console.log(toCamelCase('the-Stealth-Warrior'))
console.log(toCamelCase(''))