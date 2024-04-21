import './App.css'
import {TaxStatusOO, Single, Married, Separated, Context} from "./TaxStatusOO.ts";

function App() {
    const income: number = Number(prompt("Enter your income", "0"));

    // Object-oriented code. Complete the code below.
    // Create the classes
    const single: TaxStatusOO = new Single();
    const married: TaxStatusOO = new Married();
    const separated: TaxStatusOO = new Separated();
    const taxStatusSelection: Context = new Context(single);

    // calculate the tax by using the Context class
    taxStatusSelection.taxStatus = single;
    const singleTaxOO: number = taxStatusSelection.calculateTax(income);

    // Use the setter to change the TaxStatus class to Married and calculate the tax
    taxStatusSelection.taxStatus = married;
    const marriedTaxOO: number = taxStatusSelection.calculateTax(income);

    // Use the setter to change the TaxStatus class to Separated and calculate the tax
    taxStatusSelection.taxStatus = separated;
    const separatedTaxOO: number = taxStatusSelection.calculateTax(income);


/*    // Functional programming code.
    // Calculate the tax using the higher-order function selectTaxStrategy()
    const singleTaxFP: number = selectTaxStrategy(singleTax, income);
    const marriedTaxFP: number = selectTaxStrategy(marriedTax, income);
    const separatedTaxFP: number = selectTaxStrategy(separatedTax, income);*/

    // Fill in the variables for the code below
    return (
        <>
            <h2>Tax Strategy Pattern - Object Oriented</h2>
            <b>For an income of ${}, the tax is</b>
            <br/><b>${singleTaxOO}</b> for a <b>single</b> person
            <br/><b>${marriedTaxOO}</b> for a <b>married</b> couple
            <br/><b>${separatedTaxOO}</b> for a <b>married couple filing separately</b>

            <h2>Tax Strategy Pattern - Functional Programming</h2>
            <b>For an income of ${}, the tax is</b>
            <br/><b>${}</b> for a <b>single</b> person
            <br/><b>${}</b> for a <b>married</b> couple
            <br/><b>${}</b> for a <b>married couple filing separately</b>
        </>
    );
}

export default App
