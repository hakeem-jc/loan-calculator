// TODO - Configure Jest to use ECMAscript modules and import files

function calculate(loanAmount, interestRate, lengthOfLoan, paymentsPerYear) {
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
}

describe("calculate function", () => {
  it("calculates loan data correctly with valid inputs", () => {
    const loanAmount = "1000000";
    const interestRate = "8.45";
    const lengthOfLoan = "30";
    const paymentsPerYear = "12";

    const expectedResult = {
      calculatedLoanPayment: "7653.73",
      totalNumberOfPayments: "360",
      amountPaid: "2755341.90",
      totalInterestPaid: "1755341.90",
    };

    const result = calculate(
      loanAmount,
      interestRate,
      lengthOfLoan,
      paymentsPerYear
    );

    expect(result).toEqual(expectedResult);
  });

  it("handles invalid inputs gracefully", () => {
    const loanAmount = "0";
    const interestRate = "0";
    const lengthOfLoan = "0";
    const paymentsPerYear = "0";

    const expectedResult = {
      calculatedLoanPayment: "NaN",
      totalNumberOfPayments: "0",
      amountPaid: "NaN",
      totalInterestPaid: "NaN",
    };

    const result = calculate(
      loanAmount,
      interestRate,
      lengthOfLoan,
      paymentsPerYear
    );

    expect(result).toEqual(expectedResult);
  });
});
