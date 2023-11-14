 let dogName = process.argv[2];
 let humanAge = process.argv[3];

// let humanYear1 = 15;
// let humanYear2 = humanYear1 + 9;
// let humanYearsAdditional = humanYear2 + 5;
const humanYears = parseInt(answer);
let dogYears;

if (humanYears <= 1) {
    dogYears = 15;
} else if (humanYears === 2) {
    dogYears = 24;
} else {
    dogYears = 24 + (humanYears - 2) * 5;
}

console.log("Your dog, " + dogName " , is " + humanAge + " years old, but is " dogYears + " years old in dog years");