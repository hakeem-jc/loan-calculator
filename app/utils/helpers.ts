import { CalculatedLoanData } from "./interfaces";

export const calculate = (
    loanAmount: number,
    interestRate: number,
    lengthOfLoan:number,
    paymentsPerYear: number
  ): CalculatedLoanData => {

    // Calculate loan payment (PMT formula)
    const monthlyInterestRate = interestRate / 100 / paymentsPerYear;
    const totalPayments = lengthOfLoan * paymentsPerYear;

    const calculatedLoanPayment =
      monthlyInterestRate > 0
        ? (loanAmount * monthlyInterestRate) /
          (1 - Math.pow(1 + monthlyInterestRate, -totalPayments))
        : loanAmount / totalPayments;

    const amountPaid = calculatedLoanPayment * totalPayments;
    const totalInterestPaid = amountPaid - loanAmount;
    
    return {
      calculatedLoanPayment: calculatedLoanPayment.toFixed(2),
      totalNumberOfPayments: totalPayments.toFixed(0),
      amountPaid: amountPaid.toFixed(2),
      totalInterestPaid: totalInterestPaid.toFixed(2),
    };
  };