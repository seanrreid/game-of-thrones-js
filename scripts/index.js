//console.log(`There are ${characters.length} characters in the array.`);

/*

let count = 0

characters.forEach(function(character){
    if(character.name[0]=== "A")
    count += 1
});

console.log(count);

*/

/*

let count = 0

characters.forEach(function(character){
    if(character.name[0]=== "Z")
    count += 1
});

console.log(count);

*/

/*
let count = 0

characters.forEach(function(character){
    if(character.died !== "")
    count += 1
});

console.log(count);

*/

/*
let count = 0
let mostTitles = ''

characters.forEach(function(character){
    if(character.titles.length > count){
        count = character.titles.length
        mostTitles = character.name
    }  
});

console.log(mostTitles, count)
*/

/*
let count = 0

characters.forEach(function(character){
    if(character.culture === "Valyrian")
    count += 1
});

console.log(count);
*/
/*
characters.forEach(function(character){
    if(character.name === "Hot Pie")
    console.log(character.playedBy);
});
*/


/*
characters.forEach(function(character){
    if(character.name.indexOf("Targaryen") !== -1){
        console.log(character.name);
    }  
});
*/

let tv = 0

characters.forEach(function(character){
    if(character.tvSeries[0] === "")
    tv += 1
});

console.log(tv);

