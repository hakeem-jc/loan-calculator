import { CalculatedLoanData } from "./interfaces";

export const calculate = (
    loanAmount: string,
    interestRate: string,
    lengthOfLoan:string,
    paymentsPerYear: string
  ): CalculatedLoanData => {

    const loanAmountNum = parseFloat(loanAmount);
    const interestRateNum = parseFloat(interestRate);
    const lengthOfLoanNum = parseFloat(lengthOfLoan);
    const paymentsPerYearNum = parseFloat(paymentsPerYear);

    // Calculate loan payment (PMT formula)
    const monthlyInterestRate = interestRateNum / 100 / paymentsPerYearNum;
    const totalPayments = lengthOfLoanNum * paymentsPerYearNum;

    const calculatedLoanPayment =
      monthlyInterestRate > 0
        ? (loanAmountNum * monthlyInterestRate) /
          (1 - Math.pow(1 + monthlyInterestRate, -totalPayments))
        : loanAmountNum / totalPayments;

    const amountPaid = calculatedLoanPayment * totalPayments;
    const totalInterestPaid = amountPaid - loanAmountNum;
    
    return {
      calculatedLoanPayment: calculatedLoanPayment.toFixed(2),
      totalNumberOfPayments: totalPayments.toFixed(0),
      amountPaid: amountPaid.toFixed(2),
      totalInterestPaid: totalInterestPaid.toFixed(2),
    };
  };