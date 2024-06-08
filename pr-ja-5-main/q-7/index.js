
let no = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
let myColor = ["Red", "Green", "White", "Black"];
function asce(arr) {
    return arr.sort((a, b) => a - b);
}
function desce(arr) {
    return arr.sort((a, b) => b - a);
}
console.log("Original numbers:", no);
console.log("Ascending order:", asce(no));
console.log("Descending order:", desce(no));

console.log("Original colors:", myColor);
console.log("Ascending order:", asce(myColor));
console.log("Descending order:", desce(myColor));
