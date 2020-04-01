//caculate a conpound interest 
// input ...
// return monthly contribution, interest earned, and total balance for x number of month 

const compoundInterest = (initialInvestment, monthlyContribution, years, interestRate) => {
    //set the initial 
    let contribution = initialInvestment + monthlyContribution;
    let compoundAnnually = interestRate / 12; // this is annaully interest only
    let monthlyInterest = compoundAnnually.toFixed(1); // make it decimal

    //first month result
    let interest = (contribution * monthlyInterest) / 100;
    let total = contribution + interest;
    let result = [{contribution, interest, total}];
    let numberOfMounts = years * 12;
    let index = 1; // start at 1 because we added first month to result

    while (index < numberOfMounts) {
        
        interest = ((total + monthlyContribution) * monthlyInterest) / 100;
        interest = Number(interest.toFixed(2));
        total = total + monthlyContribution + interest;
        total = Number(total.toFixed(2));
        
        result.push({monthlyContribution, interest, total });

        index ++;
    }

    return result;
}

console.log(compoundInterest(100, 10, 5, 10));

