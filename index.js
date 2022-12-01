// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
        cats.push(name);
        return cats;
}
function destructivelyPrependCat(name) {
        cats.unshift(name);
        return cats;
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
}
function appendCat(name) {
    const cat = [...cats, (name)];
    return cat;
} 
function prependCat(name) {
    // const cat = [];
    const cat = [(name),...cats];
  return cat;
}function removeLastCat(name) {
    const newArray=cats.slice(0,cats.length-1);
    return newArray;
}
function removeFirstCat() {
  const newArray=cats.slice(1)
  return newArray;
}










// function removeFirstCat(name) {
//         const newArray = cats.slice[1]
//         return cats;
// }
// function removeFirstCat(name){
//     const newArray = cats.slice(1);
//     // or ES6 way
//     // var newArray = [...kittens];
//     newArray.push(name)
//     return newArray
//   }
  







    