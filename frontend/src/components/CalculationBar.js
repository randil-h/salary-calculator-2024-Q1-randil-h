import React, { useMemo } from 'react';

const CalculationBar = ({ basicSalary, earnings, deductions, formatNumber }) => {
  const basicSalaryNum = parseFloat(basicSalary.replace(/,/g, ''));

  // Calculate total earnings
  const totalEarnings = useMemo(() => {
    return earnings.reduce((sum, earning) => sum + parseFloat(earning.amount.replace(/,/g, '')), basicSalaryNum);
  }, [earnings, basicSalaryNum]);

  // Calculate total earnings for EPF
  const totalEarningsForEPF = useMemo(() => {
    return basicSalaryNum + earnings.reduce((sum, earning) => {
      return earning.epfEtf ? sum + parseFloat(earning.amount.replace(/,/g, '')) : sum;
    }, 0);
  }, [earnings, basicSalaryNum]);

  // Calculate gross deductions
  const grossDeductions = useMemo(() => {
    return deductions.reduce((sum, deduction) => {
      const deductionAmount = parseFloat(deduction.amount.replace(/,/g, ''));
      const epfEtfDeduction = deduction.epfEtf ? deductionAmount * 0.10 : 0;
      return sum + deductionAmount + epfEtfDeduction;
    }, 0);
  }, [deductions]);

  // Calculate gross earnings
  const grossEarnings = useMemo(() => {
    return totalEarnings - grossDeductions;
  }, [totalEarnings, grossDeductions]);

  // Calculate gross salary for EPF
  const grossSalaryForEPF = useMemo(() => {
    return totalEarningsForEPF - grossDeductions;
  }, [totalEarningsForEPF, grossDeductions]);

  // Calculate employee EPF (8%)
  const employeeEPF = useMemo(() => {
    return (grossSalaryForEPF * 0.08).toFixed(2);
  }, [grossSalaryForEPF]);

  // Calculate employer EPF (12%)
  const employerEPF = useMemo(() => {
    return (grossSalaryForEPF * 0.12).toFixed(2);
  }, [grossSalaryForEPF]);

  // Calculate employer ETF (3%)
  const employerETF = useMemo(() => {
    return (grossSalaryForEPF * 0.03).toFixed(2);
  }, [grossSalaryForEPF]);

  // Calculate APIT
  const APIT = useMemo(() => {
    const grossEarnings = parseFloat(grossSalaryForEPF);
    let taxAmount = 0;

    if (grossEarnings <= 100000) {
      taxAmount = 0;
    } else if (grossEarnings <= 141667) {
      taxAmount = (grossEarnings * 0.06) - 6000;
    } else if (grossEarnings <= 183333) {
      taxAmount = (grossEarnings * 0.12) - 14500;
    } else if (grossEarnings <= 225000) {
      taxAmount = (grossEarnings * 0.18) - 25500;
    } else if (grossEarnings <= 266667) {
      taxAmount = (grossEarnings * 0.24) - 39000;
    } else if (grossEarnings <= 308333) {
      taxAmount = (grossEarnings * 0.30) - 55000;
    } else {
      taxAmount = (grossEarnings * 0.36) - 73500;
    }

    return taxAmount.toFixed(2);
  }, [grossSalaryForEPF]);

  // Calculate net salary
  const netSalary = useMemo(() => {
    return (grossEarnings - employeeEPF - APIT).toFixed(2);
  }, [grossEarnings, employeeEPF, APIT]);

  // Calculate cost to company (CTC)
  const CTC = useMemo(() => {
    return (grossEarnings + parseFloat(employerEPF) + parseFloat(employerETF)).toFixed(2);
  }, [grossEarnings, employerEPF, employerETF]);

  return (
      <div className="w-1/4 bg-white shadow-md rounded-lg p-6 border border-gray">
        <h2 className="text-xl font-bold mb-4">Your Salary</h2>
        <div className="pb-4 mb-4">
          <div className="flex justify-between">
            <span className="text-customGray font-semibold text-sm">Items</span>
            <span className="text-customGray font-semibold text-sm">Amount</span>
          </div>
          <div className="mt-3">
            <div className="flex justify-between">
              <span>Basic Salary</span>
              <span>{formatNumber(basicSalary)}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>Gross Earning</span>
              <span>{formatNumber(grossEarnings.toFixed(2))}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>Gross Deduction</span>
              <span>- {formatNumber(grossDeductions.toFixed(2))}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>Employee EPF (8%)</span>
              <span>- {formatNumber(employeeEPF)}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>APIT</span>
              <span>- {formatNumber(APIT)}</span>
            </div>
          </div>
        </div>
        <div className="border border-gray p-4 mb-4 rounded-lg">
          <div className="flex justify-between font-semibold">
            <span>Net Salary (Take Home)</span>
            <span>{formatNumber(netSalary)}</span>
          </div>
        </div>
        <div className="pt-4">
          <h3 className="text-sm text-customGray font-semibold mb-2">Contribution from the Employer</h3>
          <div className="flex justify-between">
            <span>Employee EPF (12%)</span>
            <span>{formatNumber(employerEPF)}</span>
          </div>
          <div className="flex justify-between mt-1">
            <span>Employee ETF (3%)</span>
            <span>{formatNumber(employerETF)}</span>
          </div>
          <div className="flex justify-between font-normal mt-6">
            <span>CTC (Cost to Company)</span>
            <span>{formatNumber(CTC)}</span>
          </div>
        </div>
      </div>
  );
};

export default CalculationBar;