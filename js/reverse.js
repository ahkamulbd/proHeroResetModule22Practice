function usualString(text) {
    for (let i = 0; i < text.length; i++) {
        const element = text[i];
        //console.log(element);
    }
}
const myString = 'I am a good boy';
const stringElement = usualString(myString);

// Getting Reverse String:

function reversedString(text) {
    for (i = text.length - 1; i >= 0; i--) {
        let element = text[i];
        console.log(element);
    }
}
const myNewString = 'I am a good boy';
const reversedStringElement = reversedString(myNewString);
