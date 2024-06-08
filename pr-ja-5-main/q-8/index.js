let word = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];


function filters(arr) {
    return arr.filter(word => word.length >= 8);
}

console.log("Original words:", word);
console.log("Filtered 8 characters:", filters(word));
