function spinWords(data) {
    const copy = [...data.split(' ')];
    data.split(' ').forEach(element => {
        let index = copy.indexOf(element);
        if (element.length > 4) copy[index] = element.split('').reverse().join('');
    });
    return copy.join(' ')
}

function spinWords(words) {
    return words.split(' ').map(function(word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}

function spinWords(string) {
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}

function spinWords(str) {
    return str.split(' ').map(w => w.length < 5 ? w : w.split('').reverse().join('')).join(' ');
}