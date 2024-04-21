export interface TaxStatusOO {
    calculateTax(income: number): number;
}

export class Single {
    public calculateTax(income: number): number {
        //check if negative
        if(income < 0){
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
    }
}

// create the class Married
export class Married {
    public calculateTax(income: number): number {
        let tax: number = (income/100)*20;
        if(income < 50000){
            tax = (income/100)*12;
        }
        else if(income < 100000){
            tax = (income/100)*15;
        }
        return tax;
    }
}

// create the class Separated
export class Separated {
    public calculateTax(income: number): number {
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
}

export class Context {
    constructor(taxStatus: TaxStatusOO) {
        this._taxStatus = taxStatus;
    }

    public get taxStatus(): TaxStatusOO {
        return this._taxStatus;
    }

    public set taxStatus(taxStatus: TaxStatusOO) {
        this._taxStatus = taxStatus;
    }

    private _taxStatus: TaxStatusOO;

    public calculateTax(income: number): number {
        return this._taxStatus.calculateTax(income);
    }

    }
