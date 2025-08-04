function monthlySavings(payments, livingCost) {
  if (!Array.isArray(payments) || typeof livingCost !== 'number') {
    return 'invalid input';
  }

  let afterTaxPayments = payments.map((payment) => {
    if (payment > 3000) {
      return payment - payment * 0.1;
    } else {
      return payment;
    }
  });

  let totalIncome = 0;
  for (let i = 0; i < afterTaxPayments.length; i++) {
    totalIncome += afterTaxPayments[i];
  }

  let savings = totalIncome - livingCost;

  if (savings < 0) {
    return 'earn more';
  } else {
    return savings;
  }
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 500));
console.log(monthlySavings([900, 2700, 3400], 100));
console.log(monthlySavings('not array', 1000));
