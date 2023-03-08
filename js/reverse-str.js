function reversedString(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        let element = text[i];
        reversed = reversed + element;
        //console.log(element, reversed);
    }
    return reversed
}
const myNewString = 'I am a good boy';
const reversed = reversedString(myNewString);
console.log(reversed);
