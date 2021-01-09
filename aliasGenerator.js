const fs = require('fs');

const getNamesFromFile = function() {
    try {
        const data = fs.readFileSync('gus_names.txt', 'utf8');
        let names = data.split('\n');
        return names.filter(name => name.length > 0);
    } catch (err) {
        console.error(err);
    }
}

const getOccupationsFromFile = function() {
    try {
        const data = fs.readFileSync('occupations.txt', 'utf8');
        let occupations = data.split('\n');
        return occupations.filter(occupation => occupation.length >0);
    } catch (err) {
        console.error(err);
    }
}

const getRandomIndex = function(length) {
    return Math.floor(Math.random() * length);
}

console.log("In need of an alias? See below!");
const names = getNamesFromFile();
const alias = names[getRandomIndex(names.length)];

const occupations = getOccupationsFromFile();
const occupation = occupations[getRandomIndex(occupations.length)];

console.log(`${alias}, ${occupation}`);

