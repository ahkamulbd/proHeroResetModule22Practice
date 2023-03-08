function greatestInArray(elements) {
    let greatest = elements[0];
    for (let i = 0; i <= elements.length; i++) {
        const element = elements[i];
        if (element > greatest) {
            greatest = element;
        }
    }
    return greatest;
}

const elementsArray = [167, 190, 120, 165, 137];

const greatestElement = greatestInArray(elementsArray);
console.log(greatestElement);