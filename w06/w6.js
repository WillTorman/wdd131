//  arrays.js
const steps = ["one", "two", "three"];
const listTemplate(step) {
    return `<li>${step}</li>`//the html string made from step
}
const stepsHtml = steps.map(listTemplate)// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = innerHTML = stepsHtml.join('')

let grades = ['A', 'B', 'A', 'C'];
let points = 0;

let gpaPoints = grades.map(function (grade) {
    switch (grades) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        default:
            alert('You suck lol.');
    }
    return points;
})

