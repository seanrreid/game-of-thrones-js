console.log(`There are ${characters.length} characters in the array.`);

const charactersWithA = [];
const charactersWithZ = [];
const charactersEndWithZ = [];
const deadPeople = [];
const valyrians = [];
let hotPie = '';
let titles = 0;
let titleHolder = '';

characters.forEach(function(character){
    const name = character.name

    if (name[0] === 'A') {
        charactersWithA.push(name);
    }
    if (name[0] === 'Z') {
        charactersWithZ.push(name);
    }
    if (name[name.length - 1] === 'z') {
        charactersEndWithZ.push(name);
    }
    if (character.died !== "") {
        deadPeople.push(name)
    }
    if (character.titles[0] != '') {
        if (character.titles.length > titles) {
            titles = character.titles.length;
            titleHolder = name;
        }
    }
    if (character.culture === 'Valyrian') {
        valyrians.push(name);
    }
    if (name === 'Hot Pie') {
        hotPie = character.playedBy;
    }
    
});

console.log(`There are ${charactersWithA.length} characters whose names start with A.`);
console.log(`There are ${charactersWithZ.length} characters whose names start with Z.`);
console.log(`There are ${charactersEndWithZ.length} characters whose names end with Z.`);
console.log(`There are ${deadPeople.length} dead characters.`);
console.log(`${titleHolder} has ${titles} titles.`);
console.log(`There are ${valyrians.length} Valyryians.`);
console.log(`Hot Pie is played by ${hotPie}`);