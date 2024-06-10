// CalculationBar.js
import React, { useMemo } from 'react';

const CalculationBar = ({ basicSalary, earnings, deductions, formatNumber }) => {
  // Calculate gross earnings, gross deductions, employee EPF, APIT, and net salary
  const grossEarnings = useMemo(() => {
    return earnings.reduce((sum, earning) => sum + parseFloat(earning.amount.replace(/,/g, '')), parseFloat(basicSalary.replace(/,/g, '')));
  }, [earnings, basicSalary]);

  const grossDeductions = useMemo(() => {
    return deductions.reduce((sum, deduction) => sum + parseFloat(deduction.amount.replace(/,/g, '')), 0);
  }, [deductions]);

  const employeeEPF = useMemo(() => {
    return (grossEarnings * 0.08).toFixed(2);
  }, [grossEarnings]);

  const APIT = useMemo(() => {
    // Replace this with your actual APIT calculation if applicable
    return (grossEarnings * 0.05).toFixed(2); // Example calculation
  }, [grossEarnings]);

  const netSalary = useMemo(() => {
    return (grossEarnings - grossDeductions - employeeEPF - APIT).toFixed(2);
  }, [grossEarnings, grossDeductions, employeeEPF, APIT]);

  const employerEPF = useMemo(() => {
    return (grossEarnings * 0.12).toFixed(2);
  }, [grossEarnings]);

  const employerETF = useMemo(() => {
    return (grossEarnings * 0.03).toFixed(2);
  }, [grossEarnings]);

  const CTC = useMemo(() => {
    return (grossEarnings + parseFloat(employerEPF) + parseFloat(employerETF)).toFixed(2);
  }, [grossEarnings, employerEPF, employerETF]);

  return (
      <div className="w-1/4 mx-auto bg-white shadow-md rounded-lg p-6 border border-gray">
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