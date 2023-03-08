

function smallestInArray(elements) {
    let smallest = elements[0];
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

const elementsArray = [167, 190, -120, 165, 137, 55, 245, 45, -23, 101, 120, 165, 137, 55, 245];

const smallestElement = smallestInArray(elementsArray);
console.log(smallestElement);