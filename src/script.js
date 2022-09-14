const pen = document.getElementById("pen");
const penTotal = pen.getTotalLength();
console.log('pen: ',penTotal);

const circle = document.getElementById("circle");
const circleTotal = circle.getTotalLength();
console.log('circle: ', circleTotal);

const text = document.getElementsByClassName("text");
Object.keys(text).map((path, index) => console.log(`text path index ${index} length: ${text[path].getTotalLength()} `));