
// function topMarkAchiever(jimMark, delaMark) {
//     if (jimMark > delaMark) {
//         console.log('Jim will get the cake');
//     }
//     else {
//         console.log('Dela will get the cake');
//     }
// }

// topMarkAchiever(89, 79);

function topMarkAchiever(jimMark, delaMark) {
    const cakeAchiever = Math.max(jimMark, delaMark);
    return cakeAchiever;
}

const cakeAchiever = topMarkAchiever(58, 79);
console.log(cakeAchiever);
