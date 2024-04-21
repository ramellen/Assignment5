type TaxStrategy = (income: number) => number;

// create the singleTax function of type TaxStrategy using the fat arrow notation
export const singleTax: TaxStrategy = (income: number): number => {
    if (income < 0) {
        return 0;
    }

    let tax: number = (income/100)*20;
    if(income < 20000){
        tax = (income/100)*12;
    }
    else if(income < 50000){
        tax = (income/100)*15;
    }
    return tax;
};

// create the marriedTax function of type TaxStrategy using the fat arrow notation
export const marriedTax: TaxStrategy = (income: number): number => {
    if (income < 0) {
        return 0;
    }
    let tax: number = (income/100)*20;
    if(income < 50000){
        tax = (income/100)*12;
    }
    else if(income < 100000){
        tax = (income/100)*15;
    }
    return tax;
}

// create the separatedTax function of type TaxStrategy using the fat arrow notation
export const separatedTax: TaxStrategy = (income: number): number => {
    if (income < 0) {
        return 0;
    }
    let tax: number = (income/100)*25;
    if(income < 16000){
        tax = (income/100)*12;
    }
    else if(income <= 40000){
        tax = (income/100)*15;
    }
    else if(income < 75000){
        tax = (income/100)*20;
    }
    return tax;
}

// create the selectTaxStrategy function which takes TaxStrategy and income parameters and returns the calculated tax.
export const selectTaxStrategy  = (taxStrategy: TaxStrategy, income: number): number => {
    switch(taxStrategy) {
        case singleTax:
            return singleTax(income);
        case marriedTax:
            return marriedTax(income);
        case separatedTax:
            return separatedTax(income)
        default:
            throw new Error("Invalid input");
    }
};