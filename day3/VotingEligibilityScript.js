const ages = {
    person1: 19,
    person2: 17,
    person3: 25,
    person4: 108,
}

function VotingEligibility(num) {
    if (num >= 18) {
        return true;
    } 
    else if (num<18 && num>0) {
        return false;
    }
}

function main() {
    for (let person in ages) {
        const age = ages[person];
        VotingEligibility(age) ? console.log(`${person} is Eligible for voting`) : console.log(`${person} is not Eligible for voting`);
    }
}

main();